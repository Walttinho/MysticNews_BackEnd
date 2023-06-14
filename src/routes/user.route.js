import { Router } from "express";
import userController from "../controllers/user.controller.js";
import { validId, validUser } from "../middlewares/global.middleware.js";

const router = Router();

// Rota para criar um novo usuário
// Route to create a new user
router.post("/create", userController.create);

// Rota para obter todos os usuários
// Route to get all users
router.get("/", userController.findAll);

// Rota para obter um usuário pelo ID
// Route to get a user by ID
router.get("/:id", validId, validUser, userController.findById);

// Rota para atualizar um usuário pelo ID
// Route to update a user by ID
router.patch("/:id", validId, validUser, userController.updateUser);

export default router;

