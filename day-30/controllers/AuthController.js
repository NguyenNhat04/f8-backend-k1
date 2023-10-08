const bcrypt = require("bcrypt");
const model = require("../models/index");
const User = model.User;

module.exports = {
  login: async (req, res) => {
    const msg = req.flash("error");
    const msgType = msg ? "danger" : "success";
    res.render("auth/login", { pageTitle: "Đăng nhập", msg, msgType });
  },

  handleLogin: async (req, res) => {
    res.redirect("/");
  },

  register: async (req, res) => {
    res.render("auth/register", { pageTitle: "Đăng ký" });
  },

  handleRegister: async (req, res) => {
    const { name, email, password } = req.body;

    const salt = 10;
    bcrypt.hash(password, salt, async (err, hash) => {
      const data = await User.create({ name, email, password: hash });

      if (!data) {
        req.flash("msg", "Vui lòng kiểm tra lại thông tin");
        res.redirect("/auth/register");
      }
      req.flash("msg", "Đăng ký thành công");
      res.redirect("/auth/login");
    });
  },

  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/auth/login");
    });
  },
};
