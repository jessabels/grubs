"use strict";
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define(
    "Instruction",
    {
      specification: DataTypes.STRING(500),
      listOrder: DataTypes.INTEGER,
      recipeId: DataTypes.INTEGER,
    },
    {}
  );
  Instruction.associate = function (models) {
    Instruction.belongsTo(models.Recipe, { foreignKey: "recipeId" });
  };
  return Instruction;
};
