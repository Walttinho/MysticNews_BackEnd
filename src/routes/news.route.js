import { Router } from "express";
const newsRouter = Router();

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
newsRouter.post("/create", authMiddleware, create);

// Rota para obter todas as notícias
newsRouter.get("/", findAll);

// Rota para obter as notícias mais populares
newsRouter.get("/top", topNews);

// Rota para pesquisar notícias por título
newsRouter.get("/search", searchByTitle);

// Rota para obter as notícias por usuário
newsRouter.get("/byUser", authMiddleware, byUser);

// Rota para obter uma notícia pelo ID
newsRouter.get("/findById/:id", authMiddleware, findById);

// Rota para atualizar uma notícia pelo ID
newsRouter.patch("/:id", authMiddleware, updateNews);

// Rota para deletar uma notícia pelo ID
newsRouter.delete("/:id", authMiddleware, deleteNews);

// Rota para dar like em uma notícia
newsRouter.patch("/like/:id", authMiddleware, likeNews);

// Rota para adicionar um comentário em uma notícia
newsRouter.patch("/comment/:id", authMiddleware, addCommentNews);

// Rota para deletar um comentário em uma notícia
newsRouter.patch("/comment/:idNews/:idComment", authMiddleware, delCommentNews);

export default newsRouter;
