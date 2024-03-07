const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const authorRouter = require("../routes/authors.routes");

const app = express();

// Middleware
app.use(express.json(), cors());
app.use(morgan("dev"));

// Routes
app.use("/api/authors", authorRouter);

export default app;
