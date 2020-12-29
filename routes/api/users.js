const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const db = require("../../db/models");
const { UserRecipe, Recipe, Like, Tip, Instruction, Ingredient, User } = db;
const {
  asyncHandler,
  handleValidationErrors,
  validateSignUpUser,
} = require("../../utils");
const { getUserToken, requireAuth } = require("../../auth");

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const users = await User.findAll({
      include: Recipe,
    });

    const userData = users.map((user) => {
      const recipeIds = user.Recipes.map((recipe) => recipe.id);
      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        recipes: recipeIds,
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
//get all recipes owned by user
router.get(
  "/:userId/recipes",
  asyncHandler(async function (req, res) {
    const userRecipes = await User.findOne({
      where: {
        id: req.params.userId,
      },
      include: Recipe,
    });

    const recipeLikes = await Like.findAll({
      where: {
        likeableType: "Recipe",
      },
    });

    const recipeTips = await Tip.findAll();
    const recipeInstructions = await Instruction.findAll();
    const recipeIngredients = await Ingredient.findAll();

    const userRecipeData = userRecipes.Recipes.map((userRecipe) => {
      const instructions = recipeInstructions
        .filter((instruction) => {
          return instruction.recipeId === userRecipe.id;
        })
        .map((instruction) => instruction.specification);

      const ingredients = recipeIngredients
        .filter((ingredient) => {
          return ingredient.recipeId === userRecipe.id;
        })
        .map((ingredient) => `${ingredient.amount} ${ingredient.product}`);

      const likes = recipeLikes
        .filter((like) => {
          return like.likeableId == userRecipe.id;
        })
        .map((like) => like.id);

      const tips = recipeTips
        .filter((tip) => {
          return tip.recipeId == userRecipe.id;
        })
        .map((tip) => tip.id);

      return {
        recipeId: userRecipe.id,
        userId: userRecipe.userId,
        dietId: userRecipe.dietId,
        title: userRecipe.title,
        description: userRecipe.description,
        cookTime: userRecipe.cookTime,
        imageUrl: userRecipe.imageUrl,
        course: userRecipe.course,
        likes,
        tips,
        instructions,
        ingredients,
      };
    });
    res.json(userRecipeData);
  })
);

router.get(
  "/:userId/recipes/likes",
  asyncHandler(async function (req, res) {
    const userLikedRecipes = await Like.findAll({
      include: Recipe,
      where: {
        userId: req.params.userId,
        likeableType: "Recipe",
      },
    });

    const likedRecipeIds = userLikedRecipes.map((recipe) => recipe.likeableId);

    const allRecipes = await Recipe.findAll();
    const likedRecipes = allRecipes.filter((recipe) =>
      likedRecipeIds.includes(recipe.id)
    );
    const recipeLikes = await Like.findAll({
      where: {
        likeableType: "Recipe",
      },
    });

    const recipeTips = await Tip.findAll();
    const recipeInstructions = await Instruction.findAll();
    const recipeIngredients = await Ingredient.findAll();

    const userLikedRecipeData = likedRecipes.map((likedRecipe) => {
      const instructions = recipeInstructions
        .filter((instruction) => {
          return instruction.recipeId === likedRecipe.id;
        })
        .map((instruction) => instruction.specification);

      const ingredients = recipeIngredients
        .filter((ingredient) => {
          return ingredient.recipeId === likedRecipe.id;
        })
        .map((ingredient) => `${ingredient.amount} ${ingredient.product}`);

      const likes = recipeLikes
        .filter((like) => {
          return like.likeableId == likedRecipe.id;
        })
        .map((like) => like.id);

      const tips = recipeTips
        .filter((tip) => {
          return tip.recipeId == likedRecipe.id;
        })
        .map((tip) => tip.id);

      return {
        recipeId: likedRecipe.id,
        userId: likedRecipe.userId,
        dietId: likedRecipe.dietId,
        title: likedRecipe.title,
        description: likedRecipe.description,
        cookTime: likedRecipe.cookTime,
        imageUrl: likedRecipe.imageUrl,
        course: likedRecipe.course,
        likes,
        tips,
        instructions,
        ingredients,
      };
    });
    res.json(userLikedRecipeData);
  })
);
//save a recipe

// router.post(
//   "/:userId/recipes/:recipeId",
//   requireAuth,
//   asyncHandler(async (req, res) => {
//     const savedRecipe = await UserRecipe.create({
//       userId: req.user.id,
//       recipeId: req.params.recipeId,
//     });

//     res.json({ savedRecipe });
//   })
// );

// //delete a saved recipe
// router.delete(
//   "/:userId/recipes/:recipeId",
//   requireAuth,
//   asyncHandler(async (req, res) => {
//     const deletedRecipe = await UserRecipe.findOne({
//       where: {
//         userId: req.user.id,
//         recipeId: req.params.recipeId,
//       },
//     });
//     deletedRecipe.destroy();

//     res.json({ deletedRecipe });
//   })
// );

//delete a recipe
router.delete(
  "/:userId/recipes/:recipeId",
  requireAuth,
  asyncHandler(async (req, res) => {
    const deletedRecipe = await Recipe.findOne({
      where: {
        userId: req.user.id,
        id: req.params.recipeId,
      },
    });
    deletedRecipe.destroy();

    res.json({ deletedRecipe });
  })
);

module.exports = router;
