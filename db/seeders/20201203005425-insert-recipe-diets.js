"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "RecipeDiets",
      [
        {
          recipeId: 1,
          dietId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          dietId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          dietId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          dietId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          dietId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          dietId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          dietId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          dietId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          dietId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          dietId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          dietId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          dietId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 5,
          dietId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 5,
          dietId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 5,
          dietId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          dietId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          dietId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          dietId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          dietId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 7,
          dietId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 7,
          dietId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 7,
          dietId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 7,
          dietId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          dietId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          dietId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          dietId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          dietId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("RecipeDiets", null, {});
  },
};
