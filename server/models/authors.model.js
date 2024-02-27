const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      minLength: [3, "Authors name must be 3+ characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
      minLength: [5, "Authors name must be 5+ characters"],
    },
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
