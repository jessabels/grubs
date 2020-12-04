"use strict";
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    "Like",
    {
      userId: DataTypes.INTEGER,
      likeableId: DataTypes.INTEGER,
      likeableType: DataTypes.STRING,
    },
    {}
  );
  Like.associate = function (models) {
    Like.belongsTo(models.User, { foreignKey: "userId" });

    Like.belongsTo(models.Recipe, {
      foreignKey: "likeableId",
      constraints: false,
    });

    Like.belongsTo(models.Tip, {
      foreignKey: "likeableId",
      constraints: false,
    });

    Like.addHook("afterFind", (findResult) => {
      if (!Array.isArray(findResult)) findResult = [findResult];
      for (const instance of findResult) {
        if (
          instance.likeableType === "Recipe" &&
          instance.Recipe !== undefined
        ) {
          instance.likeable = instance.Recipe;
        } else if (
          instance.likeableType === "Tip" &&
          instance.Tip !== undefined
        ) {
          instance.likeable = instance.Tip;
        }
        // To prevent mistakes:
        delete instance.Recipe;
        delete instance.dataValues.Recipe;
        delete instance.Tip;
        delete instance.dataValues.Tip;
      }
    });
  };

  const uppercaseFirst = (str) => `${str[0].toUpperCase()}${str.substr(1)}`;

  Like.prototype.getLikeable = function (options) {
    if (!this.likeableType) return Promise.resolve(null);
    const mixinMethodName = `get${uppercaseFirst(this.likeableType)}`;
    return this[mixinMethodName](options);
  };

  return Like;
};
