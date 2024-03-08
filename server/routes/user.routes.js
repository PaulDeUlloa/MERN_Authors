import { Router } from "express";
import { loginUser } from "../controllers/user.controller";
import { registerUser } from "../controllers/user.controller";
import { getAllUsers } from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

userRouter.get("/", getAllUsers);

export default userRouter;
