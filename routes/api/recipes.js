const { response } = require("express");
const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const { RecipeDiet, Recipe, Like } = db;
const { asyncHandler } = require("../../utils");

router.get(
  "/:course/:dietId",
  asyncHandler(async (req, res) => {
    const recipes = await RecipeDiet.findAll({
      where: {
        dietId: req.params.dietId,
      },
      include: {
        model: Recipe,
        where: {
          course: req.params.course,
        },
      },
    });

    res.json({ recipes });
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
