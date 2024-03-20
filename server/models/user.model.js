import mongooseUniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcrypt";
import { model } from "mongoose";
import { Schema } from "mongoose";

//! email and password regex
const EMAIL_REGEX = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/);
const PASSWORD_REGEX = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*?[A-Z])(?=.*?[A-Z])(?=.*[a-zA-Z]).{8,}$/
);

//! define mongoose user schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "First name is required"],
      minlength: [2, "Username must be at least two characters."],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: (value) => EMAIL_REGEX.test(value),
        message: "Please enter a valid email",
      },
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: (value) => PASSWORD_REGEX.test(value),
        message: "1 uppercase, 1 lowercase, 1 number, at least 8 characters.",
      },
    },
  },
  { timestamps: true }
);

//! set email validation message. Ensures each email is different/unique.
userSchema.plugin(mongooseUniqueValidator, {
  message: "Email in use. Please log in.",
});

//! hash password before saving
userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

//* ^^^ The "10" inside the bcrypt.hash() function refers to the number of salt rounds that Bcrypt will use when generating a salt

//! creates mongoose model and export
const User = model("User", userSchema);

export default User;

// Our UserSchema doesn't contain a field for confirmPassword. This code will allow us to compare our password with it.
// We will make use of mongoose virtual's. (fields we don't want to save in MongoDB). We will chain calls to get and set to
// the returned virtual object, allowing us to establish both a getter and a setter for the virtual field.

// userSchema
//   .virtual("confirmPassword")
//   .get(() => this._confirmPassword)
//   .set((value) => (this._confirmPassword = value));

// We then will need to make use of some Middleware to add in another validation.
// Specifically we will be using the "pre hook" and having it run before validations.

// userSchema.pre("validate", function (next) {
//   if (this.password !== this.confirmPassword) {
//     this.invalidate("confirmPassword", "Password must match confirm password");
//   }
//   next();
// });

//! ^^^ Note: avoid rewriting the callback function using an arrow function as it will not have the correct scope for this.
