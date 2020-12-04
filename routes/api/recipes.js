const { response } = require("express");
const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const { RecipeDiet, Recipe, Like } = db;
const { asyncHandler } = require("../../utils");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const veganLunchRecipes = await RecipeDiet.findAll({
      where: {
        dietId: 2,
      },
      include: {
        model: Recipe,
        where: {
          course: "Lunch",
        },
      },
    });

    const vegetarianDinners = await RecipeDiet.findAll({
      where: {
        dietId: 3,
      },
      include: {
        model: Recipe,
        where: {
          course: "Dinner",
        },
      },
    });

    res.json({ veganLunchRecipes, vegetarianDinners });
  })
);

router.get(
  "/:recipeId/likes",
  asyncHandler(async (req, res) => {
    const likes = await Like.findAll({
      where: {
        likeableType: "Recipe",
        likeableId: req.params.recipeId,
      },
    });

    res.json({ likes });
  })
);

module.exports = router;
