import { model, Schema } from "mongoose";

const AuthorSchema = new Schema(
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
    recommend: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Author = model("Author", AuthorSchema);

export default Author;
