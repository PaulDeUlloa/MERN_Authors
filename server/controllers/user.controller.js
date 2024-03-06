register: (req, res) => {
  User.create(req.body)
    .then((user) => {
      req.json({ msg: "success!", user: user });
    })
    .catch((err) => res.json(err));
};

// we created a new user with the data passed from the request via request.body. Then, we tried to save it. If the save was successful, we sent back a success message, along with the user instance. If it was not, then we sent the error as a response.
