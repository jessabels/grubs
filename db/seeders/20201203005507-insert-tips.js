"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tips",
      [
        {
          text:
            "These are soooo dreamy. Only thing I would change is add an herb like parsley.",
          recipeId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text:
            "I reccomend reheating over low heat, stirring frequently, just until hot and ready. It gives the sauce the perfect consistency.",
          recipeId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text:
            "They were great! I do recommend adding a couple tablespoons of flour because the batter is a little runny without it.",
          recipeId: 3,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text:
            "This was great! I do recommend using Daiya cheese as it has the best flavor.",
          recipeId: 4,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Add salt and butter to help bring out the cheesy flavor.",
          recipeId: 5,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tips", null, {});
  },
};
