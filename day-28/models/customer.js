"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Customer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING(30),
      email: DataTypes.STRING(100),
      password: DataTypes.STRING(100),
      status: DataTypes.INTEGER,
      province_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      createdAt: {
        type: DataTypes.DATE,
      },

      updatedAt: {
        type: DataTypes.DATE,
      },

      // deletedAt: {
      //   type: DataTypes.DATE,
      // },
    },
    {
      sequelize,
      modelName: "Customer",
      deletedAt: "deletedAt",
      updatedAt: "updatedAt",
      createdAt: "createdAt",
    }
  );
  return Customer;
};
