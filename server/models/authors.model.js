import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      minLength: [3, "Author name must be 3+ characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
      minLength: [10, "Author description must be 10+ characters"],
    },
    // recommend: {
    //   type: Boolean ,
    //   required: [true, "Description is required."],
    //   minLength: [10, "Author description must be 10+ characters"],
    // },
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
