const Router = require("express");
const loginUser = require("../controllers/user.controller");
const registerUser = require("../controllers/user.controller");
const getAllUsers = require("../controllers/user.controller");

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

userRouter.get("/", getAllUsers);

export default userRouter;
