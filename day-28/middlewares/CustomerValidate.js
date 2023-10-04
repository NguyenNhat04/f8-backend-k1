const { query, check } = require("express-validator");
const { Op } = require("sequelize");
const { Customer } = require("../models");

module.exports = () => {
  //Validate password
  // - Nếu ở trang edit -> Không cần validate password
  // - Nếu ở trang create -> Validate password
  let passwordRule = [
    check("password", "Mật khẩu bắt buộc phải nhập").notEmpty(),
    check("password", "Mật khẩu không đủ mạnh").isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    }),
  ];

  return [
    check("name", "Tên bắt buộc phải nhập").notEmpty(),
    check("name", "Tên phải từ 5 ký tự trở lên").isLength({ min: 5 }),
    check("email", "Email bắt buộc phải nhập").notEmpty(),
    check("email", "Email không đúng định dạng").isEmail(),
    ...passwordRule,
    check("email").custom(async (emailVal, { req }) => {
      const { id } = req.params;
      //Truy vấn database
      const customer = await Customer;
      const customerData = await customer.findOne({
        where: {
          email: emailVal,
          id: {
            [Op.not]: id,
          },
        },
      });
      if (customerData) {
        throw new Error("Email đã có người sử dụng");
      }
    }),
    check("password").custom(async (value, { req }) => {
      const { id } = req.params;
      if (!id && !value) {
        throw new Error("Mật khẩu bắt buộc phải nhập");
      }
    }),
  ];
};
