const md5 = require("md5");
const User = require("../models/User");
module.exports = {
  index: (req, res) => {
    return res.render("auth/login", {
      error: req.flash("error"),
      success: req.flash("success"),
    });
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const users = await User;

    const userList = await users.findOne({ where: { email: email } });

    if (userList) {
      if (email === userList.email && md5(password) === userList.password) {
        req.session.isLogged = true;
        res.redirect("/");
      } else if (md5(password) !== userList.password) {
        req.flash("error", "Mật khẩu không chính xác");
      }
    } else if (email) {
      req.flash("error", "Email không chính xác");
    }

    return res.redirect("/dang-nhap");
  },

  logout: (req, res) => {
    req.session.isLogged = false;
    req.flash("success", "Đăng xuất thành công");
    return res.redirect("/dang-nhap");
  },
};
