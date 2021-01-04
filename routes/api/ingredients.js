const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const { RecipeDiet, Recipe, Like, Tip, Instruction, Ingredient } = db;
const { asyncHandler } = require("../../utils");
const { requireAuth } = require("../../auth");

// create a recipe ingredient
router.post(
  "/:recipeId",
  requireAuth,
  asyncHandler(async (req, res) => {
    const ingredient = await Ingredient.create({
      amount: req.body.amount,
      product: req.body.product,
      recipeId: req.params.recipeId,
    });

    res.json({ ingredient });
  })
);

module.exports = router;
