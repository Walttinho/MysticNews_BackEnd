import { Router } from "express";
import { login, logout } from "../controllers/auth.controller.js";

const authRouter = Router();

// Rota para autenticação/login
authRouter.post("/login", login);

// Rota para logout
authRouter.post("/logout", logout);

export default authRouter;


