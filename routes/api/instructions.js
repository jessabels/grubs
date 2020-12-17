const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const { RecipeDiet, Recipe, Like, Tip, Instruction, Ingredient } = db;
const {
  asyncHandler,
  handleValidationErrors,
  validateText,
} = require("../../utils");
const { requireAuth } = require("../../auth");

// create an instruction
router.post(
  "/:recipeId",
  requireAuth,
  asyncHandler(async (req, res) => {
    const instructions = await Instruction.findAll({
      where: {
        recipeId: req.params.recipeId,
      },
    });
    const instruction = await Instruction.create({
      specification: req.body.specification,
      listOrder: instructions.length + 1,
      recipeId: req.params.recipeId,
    });

    res.json({ instruction });
  })
);

module.exports = router;
