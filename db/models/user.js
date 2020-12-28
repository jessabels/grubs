const bcrypt = require("bcryptjs");

("use strict");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      hashedPassword: DataTypes.STRING.BINARY,
    },
    {}
  );
  User.associate = function (models) {
    // const columnMapping = {
    //   through: "UserRecipe",
    //   otherKey: "recipeId",
    //   foreignKey: "userId",
    // };
    // User.belongsToMany(models.Recipe, columnMapping);
    User.hasMany(models.Tip, { foreignKey: "userId" });
    User.hasMany(models.Like, { foreignKey: "userId" });
    User.hasMany(models.Recipe, { foreignKey: "userId" });
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  return User;
};
