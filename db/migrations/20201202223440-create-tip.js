"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Tips", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
      },
      recipeId: {
        type: Sequelize.INTEGER,
        references: { model: "Recipes" },
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: "Users" },
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
    return queryInterface.dropTable("Tips");
  },
};
