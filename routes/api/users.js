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
      const savedRecipeIds = user.Recipes.map((recipe) => recipe.id);
      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        savedRecipes: savedRecipeIds,
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

router.get(
  "/:userId/recipes",
  asyncHandler(async function (req, res) {
    const savedRecipes = await User.findOne({
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

    const savedRecipeData = savedRecipes.Recipes.map((savedRecipe) => {
      const instructions = recipeInstructions
        .filter((instruction) => {
          return instruction.recipeId === savedRecipe.id;
        })
        .map((instruction) => instruction.specification);

      const ingredients = recipeIngredients
        .filter((ingredient) => {
          return ingredient.recipeId === savedRecipe.id;
        })
        .map((ingredient) => `${ingredient.amount} ${ingredient.product}`);

      const likes = recipeLikes
        .filter((like) => {
          return like.likeableId == savedRecipe.id;
        })
        .map((like) => like.id);

      const tips = recipeTips
        .filter((tip) => {
          return tip.recipeId == savedRecipe.id;
        })
        .map((tip) => tip.id);

      return {
        recipeId: savedRecipe.id,
        dietId: savedRecipe.dietId,
        title: savedRecipe.title,
        description: savedRecipe.description,
        cookTime: savedRecipe.cookTime,
        imageUrl: savedRecipe.imageUrl,
        course: savedRecipe.course,
        likes,
        tips,
        instructions,
        ingredients,
      };
    });
    res.json(savedRecipeData);
  })
);

//save a recipe

router.post(
  "/:userId/recipes/:recipeId",
  requireAuth,
  asyncHandler(async (req, res) => {
    const savedRecipe = await UserRecipe.create({
      userId: req.user.id,
      recipeId: req.params.recipeId,
    });

    res.json({ savedRecipe });
  })
);

//delete a saved recipe
router.delete(
  "/:userId/recipes/:recipeId",
  requireAuth,
  asyncHandler(async (req, res) => {
    const deletedRecipe = await UserRecipe.findOne({
      where: {
        userId: req.user.id,
        recipeId: req.params.recipeId,
      },
    });
    deletedRecipe.destroy();

    res.json({ deletedRecipe });
  })
);

module.exports = router;
