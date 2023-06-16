import { Router } from "express";
import { login, logout } from "../controllers/auth.controller.js";

const router = Router();

// Rota para autenticação/login
router.post("/login", login);

// Rota para logout
router.post("/logout", logout);

export default router;


