import {config} from "../../config.js";
import {findByIdService} from "../services/user.service.js";

// Middleware de autenticação
export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

// Verifica se o cabeçalho de autorização foi fornecido
    if (!authorization) {
      return res
        .status(401)
        .send({ message: "No authorization header provided" });
    }

    const parts = authorization.split(" ");

     // Verifica se o cabeçalho de autorização está no formato correto
    if (parts.length !== 2) {
      return res.status(401).send({ message: "Invalid authorization header" });
    }

    const [schema, token] = parts;

    // Verifica se o esquema de autorização é válido
    if (schema !== "Bearer") {
      return res.status(401).send({ message: "Invalid authorization schema" });
    }

    config.verify(token, config.secret, async (error, decoded) => {

      // Verifica se o token é válido
      if (error) {
        return res.status(401).send({ message: "Invalid token" });
      }

      const user = await findByIdService(decoded.id);

    // Verifica se o usuário associado ao token existe  
      if (!user || !user.id) {
        return res.status(401).send({ message: "Invalid token" });
      }
      req.userId = user._id;

      return next();
    });
  } catch (error) {
    // Captura e trata qualquer erro
    console.error("Authentication error:", error);
    res.status(500).send({ message: "Authentication error" });
  }
};
