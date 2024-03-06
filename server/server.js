const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;
const myFirstSecret = process.env.FIRST_SECRET_KEY;
const jwt = require("jsonwebtoken");

const payload = {
  id: user._id,
};

const userToken = jwt.sign(payload, process.env.FIRST_SECRET_KEY);

//* Import mongoose.config
require("./config/mongoose.config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* import routes
require("./routes/authors.routes")(app);

//* Listening on port
app.listen(port, () => console.log(`✨Listening on port: ${port}✨`));
