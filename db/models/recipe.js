"use strict";
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      cookTime: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
      course: DataTypes.STRING,
    },
    {}
  );
  Recipe.associate = function (models) {
    const columnMapping = {
      through: "UserRecipe",
      otherKey: "userId",
      foreignKey: "recipeId",
    };

    const columnMapping2 = {
      through: "RecipeDiet",
      otherKey: "dietId",
      foreignKey: "recipeId",
    };

    Recipe.belongsToMany(models.User, columnMapping);
    Recipe.belongsToMany(models.Diet, columnMapping2);
    Recipe.hasMany(models.Ingredient, { foreignKey: "recipeId" });
    Recipe.hasMany(models.Instruction, { foreignKey: "recipeId" });
    Recipe.hasMany(models.Tip, { foreignKey: "recipeId" });
    Recipe.hasMany(models.Like, {
      foreignKey: "likeableId",
      constraints: false,
      scope: {
        likeableType: "Recipe",
      },
    });
  };
  return Recipe;
};
