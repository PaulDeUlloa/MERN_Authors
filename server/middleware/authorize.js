import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

async function authorize(req, res, next) {
  //verify authorization
  const { Authorization } = req.headers;

  if (!Authorization) {
    return res.status(401).json({ errors: "Authorization token required." });
  }
  console.log("you are here1####");

  const token = Authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    req.userId = await User.findById(id).select("_id");
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ errors: "Request not authorized." });
  }
  console.log("you are here2####");
}

export default authorize;
