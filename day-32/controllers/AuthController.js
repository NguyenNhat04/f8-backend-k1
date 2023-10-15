const model = require("../models/index");
const User = model.User;
const bcrypt = require("bcrypt");

module.exports = {
  login: async (req, res) => {
    const msg = req.flash("error");

    const msgType = msg ? "danger" : "success";
    res.render("auth/login", {
      pageTitle: "Đăng nhập",
      msg,
      msgType,
      layout: false,
    });
  },
  handleLogin: async (req, res) => {
    res.redirect("/");
  },
};
