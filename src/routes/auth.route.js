import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

const router = Router();

<<<<<<< HEAD

// Rota para autenticação/login
=======
// Rota para autenticação/login
// Route for authentication/login
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
router.post("/login", login);

export default router;

