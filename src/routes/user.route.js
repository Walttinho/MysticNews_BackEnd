import { Router } from "express";
import {
  createUser,
  findAllUser,
  findByIdUser,
  updateUser,
} from "../controllers/user.controller.js";
import { validId} from "../middlewares/global.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.post("/create", createUser);

userRouter.use(authMiddleware) 
userRouter.get("/", findAllUser);

userRouter.get("/:id",validId, findByIdUser);
userRouter.patch("/:id",validId, updateUser);

export default userRouter;
