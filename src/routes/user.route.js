import {Router} from "express";
import userController from "../controllers/user.controller.js";
import { validId, validUser } from "../middlewares/global.middleware.js";

const router = Router();

// Rota para criar um novo usuário
router.post("/", userController.create);

// Rota para obter todos os usuários
router.get("/", userController.findAll);

// Rota para obter um usuário pelo ID
router.get("/:id", validId, validUser, userController.findById);

// Rota para obter um usuário pelo ID
router.patch("/:id", validId, validUser, userController.updateUser);

export default router;
