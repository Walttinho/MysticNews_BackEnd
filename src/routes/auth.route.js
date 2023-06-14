import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

const router = Router();

// Rota para autenticação/login
// Route for authentication/login
router.post("/login", login);

export default router;

