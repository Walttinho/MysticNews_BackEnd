import mongoose from "mongoose";
import userService from "../services/user.service.js";

// Middleware para validar o ID
// Middleware to validate the ID
export const validId = (req, res, next) => {
  const id = req.params.id;

  try {
    // Verifica se o ID fornecido é um ObjectId válido
    // Checks if the provided ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid ID" });
    }
    next(); // Chama o próximo middleware ou rota
    // Calls the next middleware or route
  } catch (error) {
    // Em caso de erro, envia uma resposta com o status 500 (Internal Server Error)
    // In case of error, sends a response with status 500 (Internal Server Error)
    res.status(500).send({ message: "An error occurred" });
  }
};

// Middleware para validar o usuário
// Middleware to validate the user
export const validUser = async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await userService.findByIdService(id);

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    req.id = id;
    req.user = user;

    next();
    // Chama o próximo middleware ou rota
    // Calls the next middleware or route
  } catch (error) {
    // Em caso de erro, envia uma resposta com o status 500 (Internal Server Error)
    // In case of error, sends a response with status 500 (Internal Server Error)
    res.status(500).send({ message: "An error occurred" });
  }
};
