import { Router } from "express";
const router = Router();

import {
  create,
  findAll,
  topNews,
  findById,
  searchByTitle,
  byUser,
  updateNews,
  deleteNews,
  likeNews,
  addCommentNews,
  delCommentNews,
} from "../controllers/news.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

// Rota para criar uma nova notícia
router.post("/create", authMiddleware, create);

// Rota para obter todas as notícias
router.get("/", findAll);

// Rota para obter as notícias mais populares
router.get("/top", topNews);

// Rota para pesquisar notícias por título
router.get("/search", searchByTitle);

// Rota para obter as notícias por usuário
router.get("/byUser", authMiddleware, byUser);

// Rota para obter uma notícia pelo ID
router.get("/:id", authMiddleware, findById);

// Rota para atualizar uma notícia pelo ID
router.patch("/:id", authMiddleware, updateNews);

// Rota para deletar uma notícia pelo ID
router.delete("/:id", authMiddleware, deleteNews);

// Rota para dar like em uma notícia
router.patch("/like/:id", authMiddleware, likeNews);

// Rota para adicionar um comentário em uma notícia
router.patch("/comment/:id", authMiddleware, addCommentNews);

// Rota para deletar um comentário em uma notícia
router.patch("/comment/:idNews/:idComment", authMiddleware, delCommentNews);

export default router;
