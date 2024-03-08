//Es module import/export syntax! (These imports on the server side)

import express from "express";
import morgan from "morgan";
import cors from "cors";
import authorsRouter from "../routes/authors.routes";
import userRouter from "../routes/user.routes";

const app = express();

// Middleware
app.use(express.json(), cors());
app.use(morgan("dev"));

// Routes
app.use("/api/authors", authorsRouter);
app.use("/api/auth", userRouter);

export default app;
