// Customer Models
const { DataTypes } = require("sequelize");

const Customer = async () => {
  const sequelize = await require("../utils/db");

  return sequelize.define(
    "Customer",
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.NUMBER,
      },
      create_at: {
        type: DataTypes.DATE,
      },
      update_at: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
      tableName: "customers",
    }
  );
};

module.exports = Customer();

// Convert từ Model Name sang TableName

// Nguyên tắc khi đặt tên Model

/*
Tên file Model trùng với tên Model
Dùng PascalCase để đặt tên
Tên Model trùng với tên Table trong Database (Dùng số ít)
1 file model chỉ làm việc với 1 table
 */
