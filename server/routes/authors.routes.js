import Router from "express";
import authorize from "../middleware/authorize.js";

import {
  createAuthor,
  allAuthors,
  oneAuthor,
  updateAuthor,
  deleteAuthor,
} from "../controllers/authors.controller.js";

const authorsRouter = Router();

// prettier-ignore
authorsRouter
  .route("/")
  .post(authorize, createAuthor)
  .get(allAuthors);
//! To protect the createRoute on the backend(server) we use the authorize file in the middleware folder.

// prettier-ignore
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
