const mongoose = require("mongoose");

const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@authordb.9vfx3fl.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("💚 Successfully connected to MongoDB!"))
  .catch((err) =>
    console.log("💥 Something went wrong when connecting to the database", err)
  );
