"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];
    for (let index = 0; index < 50; index++) {
      const hashedPassword = await bcrypt.hash("123456", 10);
      data.push({
        name: `User ${index + 1}`,
        email: `user${index + 1}@gmail.com`,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("users", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
