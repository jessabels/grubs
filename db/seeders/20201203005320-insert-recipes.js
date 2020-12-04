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
        {
          title: "Oven Baked Salmon with Lemon Cream Sauce",
          description:
            "This oven baked salmon is drizzled generously in a simple and delicious lemon cream sauce (classically known as lemon beurre blanc).",
          cookTime: 14,
          imageUrl: "https://grubs.s3.amazonaws.com/salmon.jpg",
          course: "Dinner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "3-ingredient Pancakes",
          description: "Yummy and easy to make pancakes! Only 3 ingredients!",
          cookTime: 25,
          imageUrl: "https://grubs.s3.amazonaws.com/pancakes.jpg",
          course: "Breakfast",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Vegan Grilled Cheese Sandwich",
          description:
            "These easy cheezy sandwiches are perfect for anyone who’s dairy-intolerant, allergic, vegan, or simply living a healthy lifestyle",
          cookTime: 10,
          imageUrl: "https://grubs.s3.amazonaws.com/vegan-grilled-cheese.jpg",
          course: "Lunch",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "3-ingredient Mac & Cheese",
          description:
            "The ultimate comfort food, and it only takes 3 ingredients!",
          cookTime: 10,
          imageUrl: "https://grubs.s3.amazonaws.com/mac-and-cheese.jpg",
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
