import mongoose from "mongoose";
import userService  from "../services/user.service.js";

// Middleware para validar o ID
export const validId = (req, res, next) => {
  const id = req.params.id;

  try {
    // Verifica se o ID fornecido é um ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid ID" });
    }
    next(); // Chama o próximo middleware ou rota
  } catch (error) {
    // Em caso de erro, envia uma resposta com o status 500 (Internal Server Error)
    res.status(500).send({ message: "An error occurred" });
  }
};

// Middleware para validar o usuário
export const validUser = async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await userService.findByIdService(id);

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    req.id = id;
    req.user = user;

    next(); // Chama o próximo middleware ou rota
  } catch (error) {
    // Em caso de erro, envia uma resposta com o status 500 (Internal Server Error)
    res.status(500).send({ message: "An error occurred" });
  }
};
