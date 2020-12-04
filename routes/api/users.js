const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const db = require("../../db/models");
const { User } = db;
const { check } = require("express-validator");
const {
  asyncHandler,
  handleValidationErrors,
  validateSignUpUser,
} = require("../../utils");
const { getUserToken } = require("../../auth");

router.get("/", (req, res) => {
  res.send("success");
});

router.post(
  "/",
  validateSignUpUser,
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      hashedPassword,
    });

    const token = getUserToken(user);
    res.status(201).json({
      user: { id: user.id, firstName: user.firstName, lastName: user.lastName },
      token,
    });
  })
);

module.exports = router;
