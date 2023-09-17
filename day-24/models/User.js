const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING(50),
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
    },
    password: {
      type: DataTypes.STRING(50),
    },
  },
  {
    timestamps: false,
  }
);
module.exports = User;
