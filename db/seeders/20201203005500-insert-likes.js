"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Likes",
      [
        {
          userId: 1,
          likeableId: 1,
          likeableType: "Recipe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          likeableId: 1,
          likeableType: "Tip",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Likes", null, {});
  },
};
