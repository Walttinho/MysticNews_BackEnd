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
// Route to create a new news
router.post("/create", authMiddleware, create);

// Rota para obter todas as notícias
// Route to get all news
router.get("/", findAll);

// Rota para obter as notícias mais populares
// Route to get top news
router.get("/top", topNews);

// Rota para pesquisar notícias por título
// Route to search news by title
router.get("/search", searchByTitle);

// Rota para obter as notícias por usuário
// Route to get news by user
router.get("/byUser", authMiddleware, byUser);

// Rota para obter uma notícia pelo ID
// Route to get a news by ID
router.get("/:id", authMiddleware, findById);

// Rota para atualizar uma notícia pelo ID
// Route to update a news by ID
router.patch("/:id", authMiddleware, updateNews);

// Rota para deletar uma notícia pelo ID
// Route to delete a news by ID
router.delete("/:id", authMiddleware, deleteNews);

// Rota para dar like em uma notícia
// Route to like a news
router.patch("/like/:id", authMiddleware, likeNews);

// Rota para adicionar um comentário em uma notícia
// Route to add a comment to a news
router.patch("/comment/:id", authMiddleware, addCommentNews);

// Rota para deletar um comentário em uma notícia
// Route to delete a comment from a news
router.patch("/comment/:idNews/:idComment", authMiddleware, delCommentNews);

export default router;
