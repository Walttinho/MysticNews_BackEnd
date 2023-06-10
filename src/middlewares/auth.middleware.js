import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userService from "../services/user.service.js";
dotenv.config();

export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.send(401);
    }

    const parts = authorization.split(" ");
    if (parts.length !== 2) {
      return res.send(401);
    }

    const [schema, token] = parts;
    if (schema !== "Bearer") {
      return res.send(401);
    }

    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) {
        return res.status(401).send({ message: "Token Invalid" });
      }

      const user = await userService.findByIdService(decoded.id);
      if (!user || !user.id) {
        return res.status(401).send({ message: "Token Invalid" });
      }
      req.userId = user._id;

      return next();
    });
  } catch (error) {
    // Captura e trata qualquer erro
    console.error("Error creating news:", error);
    res.status(500).send({ message: "Error creating news" });
  }
};
