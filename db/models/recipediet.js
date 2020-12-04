"use strict";
module.exports = (sequelize, DataTypes) => {
  const RecipeDiet = sequelize.define(
    "RecipeDiet",
    {
      recipeId: DataTypes.INTEGER,
      dietId: DataTypes.INTEGER,
    },
    {}
  );
  RecipeDiet.associate = function (models) {
    RecipeDiet.belongsTo(models.Recipe, { foreignKey: "recipeId" });
    RecipeDiet.belongsTo(models.Diet, { foreignKey: "dietId" });
  };
  return RecipeDiet;
};
