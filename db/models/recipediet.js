'use strict';
module.exports = (sequelize, DataTypes) => {
  const RecipeDiet = sequelize.define('RecipeDiet', {
    recipeId: DataTypes.INTEGER,
    dietId: DataTypes.INTEGER
  }, {});
  RecipeDiet.associate = function(models) {
    // associations can be defined here
  };
  return RecipeDiet;
};