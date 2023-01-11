const express = require("express");
const { check } = require("express-validator");

const userContollers = require("../controllers/user-controllers");

const router = express.Router();

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").not().isEmpty(),
  ],
  userContollers.signup
);

router.post("/login", userContollers.login);

module.exports = router;
