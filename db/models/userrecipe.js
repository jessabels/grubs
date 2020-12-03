'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRecipe = sequelize.define('UserRecipe', {
    userId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {});
  UserRecipe.associate = function(models) {
    // associations can be defined here
  };
  return UserRecipe;
};