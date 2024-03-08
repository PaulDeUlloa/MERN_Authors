import Author from "../models/authors.model.js";

//! Create
async function createAuthor(req, res) {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

//! Get All
async function allAuthors(_, res) {
  try {
    const authorList = await Author.find({});
    res.status(200).json(authorList);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

//! Get One
async function oneAuthor(req, res) {
  const { id } = req.params;

  try {
    const oneAuthor = await Author.findById(id);
    res.status(200).json(oneAuthor);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

//! Update
async function updateAuthor(req, res) {
  const { id } = req.params;

  try {
    const updateAuthor = await Author.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updateAuthor);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

//! Delete
async function deleteAuthor(req, res) {
  const { id } = req.params;
  console.log("deleting author", id);

  try {
    const deleteOne = await Author.findByIdAndDelete(id);
    res.status(200).json(deleteOne);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export { createAuthor, allAuthors, oneAuthor, updateAuthor, deleteAuthor };
