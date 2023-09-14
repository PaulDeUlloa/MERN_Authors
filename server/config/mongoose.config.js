const mongoose = require("mongoose");

const uri = process.env.URI;

mongoose
  .connect(uri)
  .then(() => console.log("💚 Successfully connected to MongoDB!"))
  .catch((err) =>
    console.log("💥 Something went wrong when connecting to the database", err)
  );
