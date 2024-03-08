import { Router } from "express";

import {
  createAuthor,
  allAuthors,
  oneAuthor,
  updateAuthor,
  deleteAuthor,
} from "../controllers/authors.controller.js";

const authorsRouter = Router();

authorsRouter.route("/").post(createAuthor).get(allAuthors);

authorsRouter
  .route("/:id")
  .post(oneAuthor)
  .put(updateAuthor)
  .patch(updateAuthor)
  .delete(deleteAuthor);

export default authorsRouter;

// module.exports = (app) => {
//   //* Establish each CRUD operation routes below:

//   app.get("/api/authors", AuthorController.allAuthors);

//   app.get("/api/authors/:id", AuthorController.oneAuthor);

//   app.post("/api/authors", AuthorController.createAuthor);

//   app.put("/api/authors/:id", AuthorController.updateAuthor);

//   app.delete("/api/authors/:id", AuthorController.deleteAuthor);
// };
