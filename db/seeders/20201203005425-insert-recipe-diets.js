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
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("RecipeDiets", null, {});
  },
};
