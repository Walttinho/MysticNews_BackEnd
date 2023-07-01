import User from "../models/User.js";
import {config} from "../../config.js";

// Serviço para fazer o login
export const loginService = async (email, password) => {
  try {
    const user = await User.findOne({ email: email }).select("+password");
    return user;
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Login error");
  }
};

// Serviço para gerar o token de autenticação
export const generateToken = (id) => {
  try {
    const token = config.sign({ id: id }, config.secret, {
      expiresIn: config.expiration,
    });
    return token;
  } catch (error) {
    console.error("Token generation error:", error);
    throw new Error("Token generation error");
  }
};

