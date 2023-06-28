import {Router} from "express";
import userController from "../controllers/user.controller.js";
import { validId, validUser } from "../middlewares/global.middleware.js";

const userRouter = Router();

// Rota para criar um novo usuário
userRouter.post("/create", userController.create);

// Rota para obter todos os usuários
userRouter.get("/", userController.findAll);

// Rota para obter um usuário pelo ID
userRouter.get("/:id", validId, validUser, userController.findById);

// Rota para obter um usuário pelo ID
userRouter.patch("/:id", validId, validUser, userController.updateUser);

export default userRouter;

