const mongooose = require("mongoose");
const User = require("../models/user");

// const User = require("../models/user");

exports.signup = async (req, res, next) => {
  console.log("ok");
  const email = req.body.email;

  console.log("email", email);

  const userDoc = await User.findOne({ email: email });

  if (userDoc) {
    res.status(400).json({
      message: "user already exists",
    });
  }

  const user = new User({
    email: email,
    password: email,
    name: email,
  });

  const result = await user.save();
  if (result) {
    res.status(201).json({
      message: "user created",
    });
  }
};
