import { Router } from "express";
import {
  createUser,
  findAllUser,
  findByIdUser,
  updateUser,
} from "../controllers/user.controller.js";
import { validId} from "../middlewares/global.middleware.js";

const userRouter = Router();

// Rota para criar um novo usuário
userRouter.post("/create", createUser);

// Rota para obter todos os usuários
userRouter.get("/", findAllUser);

// Rota para obter um usuário pelo ID
userRouter.get("/:id", validId,  findByIdUser);

// Rota para obter um usuário pelo ID
userRouter.patch("/:id", validId, updateUser);

export default userRouter;
