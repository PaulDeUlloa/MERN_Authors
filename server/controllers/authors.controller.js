const Author = require("../models/authors.model");

//! Get All
module.exports.allAuthors = (req, res) => {
  Author.find()
    .then((authorList) => res.json(authorList))
    .catch((err) => res.status(400).json(err));
};

//! Get One
module.exports.oneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((oneAuthor) => res.json(oneAuthor))
    .catch((err) => res.status(400).json(err));
};

//! Create
module.exports.createAuthor = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => res.json(newAuthor))
    .catch((err) => res.status(400).json(err));
};

//! Update
module.exports.updateAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAuthor) => res.json(updatedAuthor))
    .catch((err) => res.status(400).json(err));
};

//! Delete
module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((status) => res.json(status))
    .catch((err) => res.status(400).json(err));
};
