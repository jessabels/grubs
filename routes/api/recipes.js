const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const { RecipeDiet, Recipe, Like, Tip, Instruction, Ingredient } = db;
const { asyncHandler } = require("../../utils");

router.get(
  "/:id/likes",
  asyncHandler(async (req, res) => {
    // res.json({ message: "test" });

    const likes = await Like.findAll({
      where: {
        likeableType: "Recipe",
        likeableId: req.params.id,
      },
    });
    // for (const like of likes) {
    //   const message = `Found like #${like.id} with ${like.likeableType} likeable:`;
    //   console.log(message, like.likeableType);
    // }
    res.json({ likes });
  })
);

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

    const recipeLikes = await Like.findAll({
      where: {
        likeableType: "Recipe",
      },
    });

    const recipeTips = await Tip.findAll();

    const recipeData = recipes.map((recipe) => {
      const likes = recipeLikes
        .filter((like) => {
          return like.likeableId == recipe.recipeId;
        })
        .map((like) => like.id);

      const tips = recipeTips
        .filter((tip) => {
          return tip.recipeId == recipe.recipeId;
        })
        .map((tip) => tip.id);

      return {
        recipeId: recipe.recipeId,
        dietId: recipe.dietId,
        title: recipe.Recipe.title,
        description: recipe.Recipe.description,
        cookTime: recipe.Recipe.cookTime,
        imageUrl: recipe.Recipe.imageUrl,
        course: recipe.Recipe.course,
        likes,
        tips,
      };
    });

    res.json(recipeData);
  })
);

router.get(
  "/:recipeId",
  asyncHandler(async (req, res) => {
    const recipe = await Recipe.findByPk(req.params.recipeId, {});
    const recipeInstructions = await Instruction.findAll({
      where: {
        recipeId: recipe.id,
      },
    });

    const instructions = recipeInstructions.map((instruction) => {
      return instruction.specification;
    });
    const recipeLikes = await Like.findAll({
      where: {
        likeableType: "Recipe",
        likeableId: recipe.id,
      },
    });

    const likes = recipeLikes
      .filter((like) => {
        return like.likeableId == recipe.id;
      })
      .map((like) => like.id);

    const recipeTips = await Tip.findAll({
      where: {
        recipeId: recipe.id,
      },
    });
    const tips = recipeTips
      .filter((tip) => {
        return tip.recipeId == recipe.id;
      })
      .map((tip) => tip.id);

    const recipeIngredients = await Ingredient.findAll({
      where: {
        recipeId: recipe.id,
      },
    });
    const ingredients = recipeIngredients.map(
      (ingredient) => `${ingredient.amount} ${ingredient.product}`
    );

    const recipeData = {
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      cookTime: recipe.cookTime,
      imageUrl: recipe.imageUrl,
      course: recipe.course,
      likes,
      tips,
      instructions,
      ingredients,
    };

    res.json(recipeData);
  })
);

// router.get(
//   "/:id/likes",
//   asyncHandler(async (req, res) => {
//     res.json({ message: "test" });
//   })
// );

module.exports = router;
