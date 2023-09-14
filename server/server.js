const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;

//* Import mongoose.config
require("./config/mongoose.config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* import routes
// require("./routes/person.routes")(app);

//* Listening on port
app.listen(port, () => console.log(`✨Listening on port: ${port}✨`));
