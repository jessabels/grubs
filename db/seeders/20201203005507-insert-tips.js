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
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tips", null, {});
  },
};
