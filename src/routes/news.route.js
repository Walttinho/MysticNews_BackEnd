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
import { Router } from "express";

const newsRouter = Router();

newsRouter.get("/", findAll);
newsRouter.get("/top", topNews);
newsRouter.get("/search", searchByTitle);

newsRouter.use(authMiddleware);
newsRouter.post("/create", create);
newsRouter.get("/byUser", byUser);
newsRouter.get("/findById/:id", findById);
newsRouter.patch("/:id", updateNews);
newsRouter.delete("/:id", deleteNews);
newsRouter.patch("/like/:id", likeNews);
newsRouter.patch("/comment/:id", addCommentNews);
newsRouter.patch("/comment/:idNews/:idComment", delCommentNews);

export default newsRouter;
