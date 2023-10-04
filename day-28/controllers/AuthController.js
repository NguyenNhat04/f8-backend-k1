const { User } = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  index: (req, res) => {
    const msg = req.flash("msg");
    res.render("auth/login", { msg });
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email, password: await bcrypt.hash(password, 10) },
    });
    if (user?.status === 0) {
      req.flash("msg", "Vui lòng kích hoạt tài khoản!");
    } else if (user?.dataValues) {
      req.session.userLogin = user.dataValues;
    } else {
      req.flash("msg", "Email hoặc mật khẩu không chính xác");
    }
    res.redirect("/auth/login");
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/auth/login");
  },
};
