"use strict";
module.exports = (sequelize, DataTypes) => {
  const Diet = sequelize.define(
    "Diet",
    {
      dietType: DataTypes.STRING,
    },
    {}
  );
  Diet.associate = function (models) {
    const columnMapping = {
      through: "RecipeDiet",
      otherKey: "recipeId",
      foreignKey: "dietId",
    };
    Diet.belongsToMany(models.Recipe, columnMapping);
  };
  return Diet;
};
