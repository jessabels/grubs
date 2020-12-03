"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Ingredients", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      amount: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      product: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      recipeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Recipes" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Ingredients");
  },
};
