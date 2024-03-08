import app from "./config/express.js";
import connectToDb from "./config/mongoose.config.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

async function start() {
  try {
    await connectToDb();
    //* Listening on port
    app.listen(PORT, () => console.log(`✨Listening on port: ${PORT}✨`));
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
}

start();

//* Import mongoose.config
// require("./config/mongoose.config");

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//* import routes
// require("./routes/authors.routes")(app);
