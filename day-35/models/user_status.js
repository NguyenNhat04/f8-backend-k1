"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_status.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  User_status.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User_status",
    }
  );
  return User_status;
};
