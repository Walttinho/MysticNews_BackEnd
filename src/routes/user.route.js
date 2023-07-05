import { Router } from "express";
import {
  createUser,
  findAllUser,
  findByIdUser,
  updateUser,
} from "../controllers/user.controller.js";
import { validId} from "../middlewares/global.middleware.js";

const userRouter = Router();

userRouter.post("/create", createUser);
userRouter.get("/", findAllUser);

userRouter.use(validId)
userRouter.get("/:id", findByIdUser);
userRouter.patch("/:id", updateUser);

export default userRouter;
