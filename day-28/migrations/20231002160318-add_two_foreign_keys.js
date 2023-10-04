"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addConstraint("customers", {
        fields: ["province_id"], // Tên cột có khóa ngoại
        type: "foreign key",
        name: "custom_foreign_province_id", // Tên khóa ngoại tùy chỉnh (tuỳ chọn)
        references: {
          table: "provinces", // Bảng tham chiếu
          field: "id", // Cột tham chiếu trong bảng tham chiếu
        },
        onDelete: "CASCADE", // Hành động khi bản ghi liên quan bị xóa
        onUpdate: "CASCADE", // Hành động khi bản ghi liên quan được cập nhật
      }),
      queryInterface.addConstraint("customers", {
        fields: ["user_id"], // Tên cột có khóa ngoại
        type: "foreign key",
        name: "custom_foreign_user_id", // Tên khóa ngoại tùy chỉnh (tuỳ chọn)
        references: {
          table: "users", // Bảng tham chiếu
          field: "id", // Cột tham chiếu trong bảng tham chiếu
        },
        onDelete: "CASCADE", // Hành động khi bản ghi liên quan bị xóa
        onUpdate: "CASCADE", // Hành động khi bản ghi liên quan được cập nhật
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable("customers");
  },
};
