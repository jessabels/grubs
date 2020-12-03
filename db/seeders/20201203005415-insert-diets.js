"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Diets",
      [
        {
          dietType: "None",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dietType: "Vegan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dietType: "Vegetarian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dietType: "Pescatarian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Diets", null, {});
  },
};
