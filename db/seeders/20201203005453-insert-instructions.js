"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Instructions",
      [
        {
          specification:
            "Place potatoes in a large pot and cover with salted water to cover potatoes by about an inch. Heat over high heat and bring to a boil. Reduce heat to low, cover, and simmer for 15-20 minutes, until potatoes are soft when you insert a fork.",
          listOrder: 1,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Drain potatoes and place back in the pot. Use a potato masher (or a fork) to mash the potatoes.",
          listOrder: 2,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Add in the butter and cream cheese and use an electric hand mixer to mix until melted and incorporated  into the potatoes.",
          listOrder: 3,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Slowly add in the cream and continue to whisk with the electric mixer. Add salt and pepper.",
          listOrder: 4,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specification:
            "Remove from heat and transfer to a serving dish, garnish with  extra butter and serve warm.",
          listOrder: 5,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Instructions", null, {});
  },
};
