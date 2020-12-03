"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Instructions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      specification: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      listOrder: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      recipeId: {
        type: Sequelize.INTEGER,
        references: { model: "Recipes" },
        allowNull: false,
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
    return queryInterface.dropTable("Instructions");
  },
};
