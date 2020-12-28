"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Recipes",
      [
        {
          title: "Mashed Potatoes",
          userId: 1,
          description: "The best and creamiest mashed potatoes.",
          cookTime: 30,
          imageUrl: "https://grubs.s3.amazonaws.com/mashedPotatoes.jpg",
          course: "Dinner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Oven Baked Salmon with Lemon Cream Sauce",
          userId: 2,
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
          userId: 3,
          description: "Yummy and easy to make pancakes! Only 3 ingredients!",
          cookTime: 25,
          imageUrl: "https://grubs.s3.amazonaws.com/pancakes.jpg",
          course: "Breakfast",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Vegan Grilled Cheese Sandwich",
          userId: 4,
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
          userId: 5,
          description:
            "The ultimate comfort food, and it only takes 3 ingredients!",
          cookTime: 10,
          imageUrl: "https://grubs.s3.amazonaws.com/mac-and-cheese.jpg",
          course: "Dinner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Whole-Wheat Vegan Waffles",
          userId: 6,
          description:
            "These dairy- and egg-free waffles are both crisp and tender-and so simple to make.",
          cookTime: 15,
          imageUrl: "https://grubs.s3.amazonaws.com/vegan-waffles.jpeg",
          course: "Breakfast",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Thai Coconut, Broccoli and Coriander Soup",
          userId: 7,
          description:
            "The perfect quick-fix dinner for chillier nights when you want something warming but don't have much time to cook—the combination of feel-good greens and creamy coconut is a real winner.",
          cookTime: 10,
          imageUrl:
            "https://grubs.s3.amazonaws.com/thai-broccoli-coconut-soup.jpg",
          course: "Dinner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Green Goddess Sandwich",
          userId: 8,
          description:
            "This is the yummiest, meltiest, greenest vegan grilled cheese you'll ever eat! You'll feel like a green goddess (or god) when you treat yourself to one of them",
          cookTime: 5,
          imageUrl: "https://grubs.s3.amazonaws.com/green-goddess-sandwich.jpg",
          course: "Lunch",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Vegan Pasta Puttanesca",
          userId: 2,
          description:
            "An easy vegan pasta puttanesca recipe, and low-fat, too!",
          cookTime: 20,
          imageUrl: "https://grubs.s3.amazonaws.com/vegan-pasta-puttanesca.png",
          course: "Dinner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cranberry Pumpkin Muffins",
          userId: 3,
          description:
            "These are pure pumpkin perfection!!! These little beauties are moist and delicious and not too sweet.",
          cookTime: 30,
          imageUrl:
            "https://grubs.s3.amazonaws.com/Cranberry-Pumpkin-Muffins.jpg",
          course: "Breakfast",
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
