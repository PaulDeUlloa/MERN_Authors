const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const authorRouter = require("../routes/authors.routes");
const userRouter = require("../routes/user.routes");

const app = express();

// Middleware
app.use(express.json(), cors());
app.use(morgan("dev"));

// Routes
app.use("/api/authors", authorRouter);
app.use("/api/auth", userRouter);

export default app;
