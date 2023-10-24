"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userStatusRecords = [];
    for (let user_id = 12; user_id <= 50; user_id++) {
      const isActive = user_id % 2 === 1;
      userStatusRecords.push({
        user_id,
        active: isActive,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("user_statuses", userStatusRecords);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_statuses", null, {});
  },
};
