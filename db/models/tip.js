"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tip = sequelize.define(
    "Tip",
    {
      text: DataTypes.STRING,
      recipeId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Tip.associate = function (models) {
    Tip.belongsTo(models.User, { foreignKey: "userId" });
    Tip.hasMany(models.Like, {
      foreignKey: "likeableId",
      constraints: false,
      scope: {
        likeableId: "Tip",
      },
    });
  };
  return Tip;
};
