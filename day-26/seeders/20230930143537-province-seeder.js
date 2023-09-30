"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("provinces", [
      {
        name: "Hà Nội",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Thành Phố Hồ Chí Minh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Đà Nẵng",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("provinces", null, {});
  },
};
