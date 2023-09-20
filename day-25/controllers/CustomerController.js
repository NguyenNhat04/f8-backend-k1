const Customer = require("../models/Customer");
const Province = require("../models/Province");
const moment = require("moment");
const { Op } = require("sequelize");
const { PER_PAGE } = process.env;
const { getPaginateUrl } = require("../utils/url");
const { validationResult } = require("express-validator");
const validate = require("../utils/validate");
const md5 = require("md5");
const e = require("connect-flash");

module.exports = {
  // Get Lists
  index: async (req, res) => {
    const { keyword, status } = req.query;

    const customer = await Customer;
    const filters = {};
    if (status === "active" || status === "inactive") {
      filters.status = status === "active" ? 1 : 0;
    }

    if (keyword?.length) {
      filters[Op.or] = [
        {
          name: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          email: {
            [Op.like]: `${keyword}`,
          },
        },
      ];
    }
    // Lấy tổng số bản ghi
    const totalCountObj = await customer.findAndCountAll({
      where: filters,
    });

    const totalCount = totalCountObj.count;
    // tính tổng số trang
    const totalPage = Math.ceil(totalCount / PER_PAGE);

    // lấy trang hiện tại
    let { page } = req.query;
    if (!page || page < 1 || page > totalPage) {
      page = 1;
    }

    // tính offset

    const offset = (page - 1) * PER_PAGE;

    const customerList = await customer.findAll({
      // attributes: ["id", "name", "email", "status"],
      order: [["create_at", "DESC"]],
      where: filters,
      limit: parseInt(PER_PAGE),
      offset: offset,
    });
    const msg = req.flash("msg");

    res.render("customers/index", {
      customerList,
      moment,
      req,
      totalPage,
      page,
      getPaginateUrl,
      msg,
    });
  },

  // get Form
  create: async (req, res) => {
    const province = await Province;
    const provinceList = await province.findAll();
    const msg = req.flash("msg");

    const errors = req.flash("errors");

    res.render("customers/create", { provinceList, msg, errors, validate });
  },

  // Post Create
  store: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      // Thêm dữ liệu
      const customer = await Customer;
      req.body.password = md5(req.body.password);
      req.flash("msg", "Thêm khách hàng thành công");
      customer.create(req.body);
      res.redirect("/customers");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
      res.redirect("/customers/create");
    }
  },

  // get update
  update: async (req, res) => {
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    const province = await Province;
    const provinceList = await province.findAll();
    const customer = await Customer;

    const customerId = req.params.id;
    const customerList = await customer.findOne({
      where: {
        id: customerId,
      },
    });

    res.render("customers/update", {
      customerList,
      msg,
      errors,
      validate,
      provinceList,
    });
  },

  // Post Update
  handeUpdate: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const { name, email, password, status } = req.body;
      const customerId = req.params.id;
      const newPassword = md5(password);
      const customers = await Customer;
      const newCustomer = {
        name: name,
        email: email,
        password: newPassword,
        status: status,
      };
      customers.update(newCustomer, {
        where: {
          id: customerId,
        },
      });

      req.flash("msg", "Sửa khách hàng thành công");
      res.redirect("/customers");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
      res.redirect("/customers/create");
    }
  },

  delete: async (req, res) => {
    const customerId = req.params.id;
    console.log(customerId);
    const customer = await Customer;
    const customerDelete = await customer.destroy({
      where: {
        id: customerId,
      },
    });
    req.flash("msg", "Xóa thành công");
    res.redirect("/customers");
  },
};
