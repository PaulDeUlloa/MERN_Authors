const bcrypt = require("bcrypt");

//! The "10" inside the bcrypt.hash() function refers to the number of salt rounds that Bcrypt will use when generating a salt
UserSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"],
    },
  },
  { timestamps: true }
);

// Our UserSchema doesn't contain a field for confirmPassword. This code will allow us to compare our password with it.
// We will make use of mongoose virtuals. (fields we don't want to save in MongoDB). We will chain calls to get and set to
// the returned virtual object, allowing us to establish both a getter and a setter for the virtual field.

UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

// We then will need to make use of some Middleware to add in another validation.
// Specifically we will be using the "pre hook" and having it run before validations.

UserSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password must match confirm password");
  }
  next();
});

//! ^^^ Note: avoid rewriting the callback function using an arrow function as it will not have the correct scope for this.
