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
        {
          userId: 2,
          likeableId: 2,
          likeableType: "Recipe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          likeableId: 2,
          likeableType: "Tip",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          likeableId: 3,
          likeableType: "Recipe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          likeableId: 3,
          likeableType: "Tip",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          likeableId: 4,
          likeableType: "Recipe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          likeableId: 4,
          likeableType: "Recipe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          likeableId: 4,
          likeableType: "Tip",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          likeableId: 4,
          likeableType: "Tip",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          likeableId: 4,
          likeableType: "Tip",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          likeableId: 5,
          likeableType: "Recipe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          likeableId: 5,
          likeableType: "Recipe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          likeableId: 5,
          likeableType: "Recipe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          likeableId: 5,
          likeableType: "Tip",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          likeableId: 5,
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
