const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");

const User = require("../models/user");

exports.signup = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.find({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError("User exist already", 422);
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    image: "https://cdn-icons-png.flaticon.com/512/219/219986.png",
    password,
  });

  let user;
  try {
    user = await createdUser.save();
  } catch (err) {
    const error = new HttpError("Could not signup user.", 404);
    return next(error);
  }

  res.status(200).json({ user: createdUser });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Loggin in failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      401
    );
    return next(error);
  }
  res.json({ message: "Logged in" });
};
