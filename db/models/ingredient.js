"use strict";
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define(
    "Ingredient",
    {
      amount: DataTypes.STRING,
      product: DataTypes.STRING,
      recipeId: DataTypes.INTEGER,
    },
    {}
  );
  Ingredient.associate = function (models) {
    Ingredient.belongsTo(models.Recipe, { foreignKey: "recipeId" });
  };
  return Ingredient;
};
