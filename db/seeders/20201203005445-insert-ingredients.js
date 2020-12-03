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
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Ingredients", null, {});
  },
};
