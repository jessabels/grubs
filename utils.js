const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);
const { check, validationResult } = require("express-validator");
const db = require("./db/models");

const handleValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array().map((error) => error.msg);
    const err = Error("Bad request");
    err.errors = errors;
    err.status = 400;
    err.title = "Bad request.";
    return next(err);
  }
  next();
};

const validateText = [
  check("text")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a tip"),
];

const validateUserEmailAndPassword = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address")
    .isLength({ max: 255 })
    .withMessage("Email Address must not be more than 255 characters long")
    .isEmail()
    .withMessage("Email Address is not a valid email"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password")
    .isLength({ max: 20 })
    .withMessage("Please provide a valid password with max 20 characters"),
];

const validateSignUpUser = [
  check("firstName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a First Name"),
  check("lastName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a Last Name"),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address")
    .isLength({ max: 255 })
    .withMessage("Email Address must not be more than 255 characters long")
    .isEmail()
    .withMessage("Email Address is not a valid email")
    .custom((value) => {
      return db.User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject(
            "The provided Email Address is already in use by another account"
          );
        }
      });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password")
    .isLength({ max: 20 })
    .withMessage("Please provide a valid password with max 20 characters"),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Confirm Password")
    .isLength({ max: 20 })
    .withMessage("Confirm Password must not be more than 20 characters long")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirm Password does not match Password");
      }
      return true;
    }),
];

module.exports = {
  asyncHandler,
  handleValidationErrors,
  validateSignUpUser,
  validateUserEmailAndPassword,
  validateText,
};
