import User from "../models/User.js";
<<<<<<< HEAD
import { config, jwt, bcrypt } from "../../config.js";

// Serviço para fazer o login
=======
import { config, bcrypt, jwt } from "../config/config.js";

// Serviço para fazer o login
// Service for user login
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
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
<<<<<<< HEAD
=======
// Function to generate authentication token
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
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

