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
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Ingredients", null, {});
  },
};
