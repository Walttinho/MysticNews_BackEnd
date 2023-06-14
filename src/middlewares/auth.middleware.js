import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js"
import userService from "../services/user.service.js";
dotenv.config();

// Middleware de autenticação
// Authentication middleware
export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    // Verifica se o cabeçalho de autorização foi fornecido
    // Check if the authorization header is provided
    if (!authorization) {
      return res
        .status(401)
        .send({ message: "No authorization header provided" });
    }

    const parts = authorization.split(" ");
    // Verifica se o cabeçalho de autorização está no formato correto
    // Check if the authorization header is in the correct format
    if (parts.length !== 2) {
      return res.status(401).send({ message: "Invalid authorization header" });
    }

    const [schema, token] = parts;
    // Verifica se o esquema de autorização é válido
    // Check if the authorization schema is valid
    if (schema !== "Bearer") {
      return res.status(401).send({ message: "Invalid authorization schema" });
    }

    jwt.verify(token, config.jwtSecret, async (error, decoded) => {
      // Verifica se o token é válido
      // Check if the token is valid
      if (error) {
        return res.status(401).send({ message: "Invalid token" });
      }

      const user = await userService.findByIdService(decoded.id);
      // Verifica se o usuário associado ao token existe
      // Check if the user associated with the token exists
      if (!user || !user.id) {
        return res.status(401).send({ message: "Invalid token" });
      }
      req.userId = user._id;

      return next();
    });
  } catch (error) {
    // Captura e trata qualquer erro
    // Catch and handle any errors
    console.error("Authentication error:", error);
    res.status(500).send({ message: "Authentication error" });
  }
};
