require("dotenv").config();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Load .env contents
const JWT_SECRET = process.env.JWT_SECRET;

// JWT generator
function generateToken(id) {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "1d",
  });
}

// Login errors object, one for both email and password
const errors = {
  credentials: {
    message: "Could not log in. Please check your credentials.",
  },
};

async function registerUser(req, res) {
  try {
    const user = await User.create(req.body);
    const userToken = generateToken(user._id);
    res.status(201).json({
      token: userToken,
      username: user.username,
      id: user._id,
    });
  } catch (err) {
    console.log(err);
    res.status(422).json(err);
  }
}

// ^ The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource.

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      console.log("Email incorrect.");
      return res.status(400).json({ errors });
    }

    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    if (!passwordIsCorrect) {
      console.log("password incorrect");
      return res.status(400).json({ errors });
    }

    const userToken = generateToken(user._id);

    res.status(200).json({
      token: userToken,
      username: user.username,
      id: user._id,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
export { registerUser, loginUser, getAllUsers };
