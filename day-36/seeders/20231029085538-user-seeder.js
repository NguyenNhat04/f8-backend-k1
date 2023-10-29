"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hash = await bcrypt.hash("123456", 10);
    return queryInterface.bulkInsert("users", [
      {
        name: "User 1",
        email: "user1@gmail.com",
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "User 2",
        email: "user3@gmail.com",
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "User 3",
        email: "user3@gmail.com",
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "User 4",
        email: "user4@gmail.com",
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "User 5",
        email: "user5@gmail.com",
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
