"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Recipes",
      [
        {
          title: "Mashed Potatoes",
          description: "The best and creamiest mashed potatoes.",
          cookTime: 30,
          imageUrl: "https://grubs.s3.amazonaws.com/mashedPotatoes.jpg",
          course: "Dinner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Recipes", null, {});
  },
};
