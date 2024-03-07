const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;

// Cookies in Express
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

res.cookie("mycookie", "mydata", { httpOnly: true }).json({
  message: "This response has a cookie",
});

//* Import mongoose.config
require("./config/mongoose.config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* import routes
require("./routes/authors.routes")(app);

//* Listening on port
app.listen(port, () => console.log(`✨Listening on port: ${port}✨`));
