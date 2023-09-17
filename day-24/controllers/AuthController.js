const md5 = require("md5");
const User = require("../models/User");
module.exports = {
  index: async (req, res) => {
    const msg = req.flash("msg");

    res.render("auth/login", { msg });
  },
  handeLogin: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email, password: md5(password) },
    });
    if (user?.dataValues) {
      // login success
      req.session.userLogin = user.dataValues;
    } else {
      // login failed
      req.flash("msg", "Email hoặc mật khẩu không chính xác!");
    }
    res.redirect("/auth/login");
  },

  logout: (req, res) => {
    req.session.destroy();
    res.redirect("auth/login");
  },
};
