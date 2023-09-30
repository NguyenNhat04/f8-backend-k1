const { check } = require("express-validator");
const Customer = require("../models/Customer");
const { Op } = require("sequelize");
console.log(check);
module.exports = () => {
  // validate password
  // Nếu ở trang edit => không cần validate password
  // nếu ở trang create => cần  validate password

  let passwordRule = [
    check("password", "Mật khẩu bắt buộc phải nhập").notEmpty(),
    check("password", "Mật khẩu không đủ mạnh").isStrongPassword({
      minLength: 8,
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

    check("email").custom(async (emailValue, { req }) => {
      // Truy vấn database
      const { id } = req.params;
      const customer = await Customer;
      const customerData = await customer.findOne({
        where: {
          email: emailValue,
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
