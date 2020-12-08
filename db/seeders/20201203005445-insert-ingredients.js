"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Ingredients",
      [
        {
          amount: "3 pounds",
          product: "potatoes",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "3/4 cup",
          product: "unsalted butter",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/4 cup",
          product: "cream cheese",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "3/4 cup",
          product: "half cream",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 teaspoon",
          product: "salt",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/2 cup",
          product: "black pepper",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "3 lb",
          product: "salmon fillet",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 tsp",
          product: "salt",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 tbsp",
          product: "olive oil",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 tbsp",
          product: "parsley",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1",
          product: "onion",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/4 cup",
          product: "fresh lemon juice",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/4 cup",
          product: "dry white wine",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/2 cup",
          product: "heavy cream",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/2 cup",
          product: "cold unsalted butter",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1",
          product: "banana",
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "2",
          product: "eggs",
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/4 teaspoon",
          product: "cinnamon",
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "8 oz",
          product: "vegan cheese",
          recipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "8 slices",
          product: "dairy-free sourdough bread",
          recipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "2 teaspoons",
          product: "olive oil",
          recipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "5 cups",
          product: "milk",
          recipeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 lb",
          product: "elbow macaroni",
          recipeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "2 cups",
          product: "shredded cheddar cheese",
          recipeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 3/4 cups",
          product: "whole-wheat flour",
          recipeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/4 cup",
          product: "sugar",
          recipeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 teaspoon",
          product: "baking powder",
          recipeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 tablespoon",
          product: "cornstarch",
          recipeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 pinch",
          product: "kosher salt",
          recipeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 1/2 cups",
          product: "vegetable oil",
          recipeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 teaspoon",
          product: "pure vanilla extract",
          recipeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/3 cup",
          product: "store-bought green curry paste",
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 (13.5-ounce) can",
          product: "coconut milk",
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "3 cups",
          product: "water",
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 pound",
          product: "broccoli florets, chopped",
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "2 cups",
          product: "baby spinach leaves, plus more to serve",
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "2 cups",
          product: "cilantro leaves",
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "2 scallions",
          product: "shredded",
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/3 cup",
          product: "basil, chopped",
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/4 cup",
          product: "pine nuts",
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1-2",
          product: "garlic cloves",
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/3 cup",
          product: "basil, chopped",
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1 cup",
          product: "kale, chopped",
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/4 cup",
          product: "extra virgin olive oil",
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          amount: "2 slices",
          product: "spelt bread",
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          amount: "1/2",
          product: "avocado,sliced",
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1/ cup",
          product: "spinach",
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "2 slices",
          product: "your favorite vegan cheese",
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "1-2 tablespoons",
          product: "coconut butter",
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Ingredients", null, {});
  },
};
