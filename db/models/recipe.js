"use strict";
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      cookTime: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
      course: DataTypes.STRING,
    },
    {}
  );
  Recipe.associate = function (models) {
    // const columnMapping = {
    //   through: "UserRecipe",
    //   otherKey: "userId",
    //   foreignKey: "recipeId",
    // };

    const columnMapping2 = {
      through: "RecipeDiet",
      otherKey: "dietId",
      foreignKey: "recipeId",
    };

    // Recipe.belongsToMany(models.User, columnMapping);
    Recipe.belongsTo(models.User, { foreignKey: "userId" });
    Recipe.belongsToMany(models.Diet, columnMapping2);
    Recipe.hasMany(models.Ingredient, {
      foreignKey: "recipeId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Recipe.hasMany(models.Instruction, {
      foreignKey: "recipeId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Recipe.hasMany(models.Tip, {
      foreignKey: "recipeId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Recipe.hasMany(models.Like, {
      foreignKey: "likeableId",
      constraints: false,
      onDelete: "CASCADE",
      hooks: true,
      scope: {
        likeableType: "Recipe",
      },
    });
  };
  return Recipe;
};
