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

    const recipeData = recipes.map((recipe) => {
      return {
        recipeId: recipe.recipeId,
        dietId: recipe.dietId,
        title: recipe.Recipe.title,
        description: recipe.Recipe.description,
        cookTime: recipe.Recipe.cookTime,
        imageUrl: recipe.Recipe.imageUrl,
        course: recipe.Recipe.course,
      };
    });

    res.json(recipeData);
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
