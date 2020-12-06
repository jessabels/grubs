const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const { RecipeDiet, Recipe, Like, Tip, Instruction, Ingredient } = db;
const { asyncHandler } = require("../../utils");

router.get(
  "/:course/:dietId(\\d+)",
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

    const recipeInstructions = await Instruction.findAll();

    const recipeIngredients = await Ingredient.findAll();

    const recipeData = recipes.map((recipe) => {
      const instructions = recipeInstructions
        .filter((instruction) => {
          return instruction.recipeId === recipe.recipeId;
        })
        .map((instruction) => instruction.specification);

      const ingredients = recipeIngredients
        .filter((ingredient) => {
          return ingredient.recipeId === recipe.recipeId;
        })
        .map((ingredient) => `${ingredient.amount} ${ingredient.product}`);

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
        instructions,
        ingredients,
      };
    });

    res.json(recipeData);
  })
);

router.get(
  "/:recipeId(\\d+)",
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

router.get(
  "/likes",
  asyncHandler(async (req, res) => {
    const likes = await Like.findAll({
      where: {
        likeableType: "Recipe",
      },
    });
    res.json({ likes });
  })
);

router.get(
  "/tips",
  asyncHandler(async (req, res) => {
    const tips = await Tip.findAll();
    const tipLikes = await Like.findAll({
      where: {
        likeableType: "Tip",
      },
    });

    const tipData = tips.map((tip) => {
      const likes = tipLikes
        .filter((tipLike) => {
          return tipLike.likeableId == tip.id;
        })
        .map((tip) => tip.id);
      return {
        id: tip.id,
        text: tip.text,
        recipeId: tip.recipeId,
        userId: tip.userId,
        likes,
      };
    });

    res.json(tipData);
  })
);

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

//like a recipe
router.post(
  "/:id/likes",
  asyncHandler(async (req, res) => {
    const like = await Like.create({
      userId: req.user.id,
      likeableId: req.params.recipeId,
      likeableType: "Recipe",
    });

    res.json({ like });
  })
);

//remove a like from a post
router.delete(
  "/:id/likes",
  asyncHandler(async (req, res) => {
    const like = await Like.findOne({
      where: {
        userId: req.user.id,
        likeableId: req.params.recipeId,
        likeableType: "Recipe",
      },
    });
    like.destroy();
    const likes = await Like.findAll();
    res.json({ likes });
  })
);

router.get(
  "/:id/tips",
  asyncHandler(async (req, res) => {
    const tips = await Tip.findAll({
      where: {
        recipeId: req.params.id,
      },
    });

    res.json({ tips });
  })
);

//post a tip
// router.post(
//   "/:id/tips",
//   asyncHandler(async (req, res) => {
//      const tip = await Tip.create({
//        text: req.body.text,
//        userId: req.user.id,
//        likeableId: req.params.recipeId,
//        likeableType: "Recipe",
//      });

//      res.json({ like });
//   })
// );

module.exports = router;
