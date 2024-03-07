require("dotenv").config();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Load .env contents
const myFirstSecret = process.env.FIRST_SECRET_KEY;

// JWT generator
const payload = {
  id: user._id,
};
const userToken = jwt.sign(payload, process.env.FIRST_SECRET_KEY, {
  expiresIn: "1D",
});

// Login errors object
const errors = {
  credentials: {
    message: "Could not log in. Please check your credentials.",
  },
};

register: (req, res) => {
  User.create(req.body)
    .then((user) => {
      req.json({ msg: "success!", user: user });
    })
    .catch((err) => res.json(err));
};

// we created a new user with the data passed from the request via request.body. Then, we tried to save it. If the save was successful, we sent back a success message, along with the user instance. If it was not, then we sent the error as a response.
