"use strict";

const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];
    const hash = bcrypt.hashSync("123456", 10);
    for (let i = 0; i < 50; i++) {
      data.push({
        name: `User ${i + 1}`,
        email: `user${i + 1}@gmail.com`,
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("users", data, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
