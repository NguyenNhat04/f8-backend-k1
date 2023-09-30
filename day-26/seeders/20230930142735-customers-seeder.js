"use strict";
const md5 = require("md5");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Customers", [
      {
        name: "Nguyễn Duy Nhất",
        email: "duynhat@gmail.com",
        password: md5("123abc@"),
        status: 1,
        province_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
      },
      {
        name: "Nguyễn Hải Dương",
        email: "duongnguyen@gmail.com",
        password: md5("123abc@"),
        status: 1,
        province_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
      },
      {
        name: "Nguyễn Hải An",
        email: "dangan@gmail.com",
        password: md5("123abc@"),
        status: 1,
        province_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
      },
      {
        name: "Nguyễn Hải Anh",
        email: "danganh@gmail.com",
        password: md5("123abc@"),
        status: 1,
        province_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
      },
      {
        name: "Nguyễn Hải Huy",
        email: "dangHuy@gmail.com",
        password: md5("123abc@"),
        status: 1,
        province_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("customers", null, {});
  },
};
