const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const db = require("../../db/models");
const { User } = db;
const {
  asyncHandler,
  handleValidationErrors,
  validateSignUpUser,
} = require("../../utils");
const { getUserToken } = require("../../auth");

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const users = await User.findAll();

    const userData = users.map((user) => {
      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
    });
    res.json(userData);
  })
);

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
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      token,
    });
  })
);

module.exports = router;
