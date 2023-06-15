<<<<<<< HEAD
import { config, jwt } from "../../config.js";
=======
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js"
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
import userService from "../services/user.service.js";

// Middleware de autenticação
<<<<<<< HEAD
=======
// Authentication middleware
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

<<<<<<< HEAD
// Verifica se o cabeçalho de autorização foi fornecido
=======
    // Verifica se o cabeçalho de autorização foi fornecido
    // Check if the authorization header is provided
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
    if (!authorization) {
      return res
        .status(401)
        .send({ message: "No authorization header provided" });
    }

    const parts = authorization.split(" ");
<<<<<<< HEAD

     // Verifica se o cabeçalho de autorização está no formato correto
=======
    // Verifica se o cabeçalho de autorização está no formato correto
    // Check if the authorization header is in the correct format
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
    if (parts.length !== 2) {
      return res.status(401).send({ message: "Invalid authorization header" });
    }

    const [schema, token] = parts;
<<<<<<< HEAD

    // Verifica se o esquema de autorização é válido
=======
    // Verifica se o esquema de autorização é válido
    // Check if the authorization schema is valid
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
    if (schema !== "Bearer") {
      return res.status(401).send({ message: "Invalid authorization schema" });
    }

    jwt.verify(token, config.jwtSecret, async (error, decoded) => {
<<<<<<< HEAD

      // Verifica se o token é válido
=======
      // Verifica se o token é válido
      // Check if the token is valid
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
      if (error) {
        return res.status(401).send({ message: "Invalid token" });
      }

      const user = await userService.findByIdService(decoded.id);
<<<<<<< HEAD

    // Verifica se o usuário associado ao token existe  
=======
      // Verifica se o usuário associado ao token existe
      // Check if the user associated with the token exists
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
      if (!user || !user.id) {
        return res.status(401).send({ message: "Invalid token" });
      }
      req.userId = user._id;

      return next();
    });
  } catch (error) {
    // Captura e trata qualquer erro
<<<<<<< HEAD
=======
    // Catch and handle any errors
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
    console.error("Authentication error:", error);
    res.status(500).send({ message: "Authentication error" });
  }
};
