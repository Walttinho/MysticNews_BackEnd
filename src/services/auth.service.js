import User from "../models/User.js";
import { config, jwt, bcrypt } from "../../config.js";

// Serviço para fazer o login
const loginService = async (email, password) => {
  try {
    const user = await User.findOne({ email: email }).select("+password");
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return null;
    }
    return user;
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Login error");
  }
};

// Serviço para gerar o token de autenticação
const generateToken = (id) => {
  try {
    const token = jwt.sign({ id: id }, config.jwtSecret, {
      expiresIn: config.jwtExpiration,
    });
    return token;
  } catch (error) {
    console.error("Token generation error:", error);
    throw new Error("Token generation error");
  }
};

//Serviço para fazer o logout
const logoutService = async (userId, token) => {
  try {
    // Verifique se o token é válido
    if (!token) {
      throw new Error("No token provided");
    }

    // Verifique se o ID do usuário no token é o mesmo do usuário que está realizando o logout
    const decodedToken = jwt.verify(token, config.jwtSecret);
    if (decodedToken.id !== userId) {
      throw new Error("Invalid user");
    }

    //Remove o token definindo como nulo
    const user = await User.findById(userId);
    user.token = null;
    await user.save();
    console.log(user.token)

    // Retorne uma mensagem indicando que o logout foi bem-sucedido
    return { message: "Logout successful" };
  } catch (error) {
    console.error("Logout error:", error);
    throw new Error("Logout error");
  }
};

export { loginService, generateToken, logoutService };
