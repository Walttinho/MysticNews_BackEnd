import User from "../models/User.js";
import { config, bcrypt, jwt } from "../config/config.js";

// Serviço para fazer o login
// Service for user login
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

// Função para gerar o token de autenticação
// Function to generate authentication token
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

export { loginService, generateToken };

