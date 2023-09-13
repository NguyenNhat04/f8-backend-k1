const md5 = require("md5");
const User = require("../models/User");
module.exports = {
  showForm: (req, res) => {
    return res.render("auth/login", {
      error: req.flash("error"),
      success: req.flash("success"),
      errorEmail: req.flash("errorEmail"),
      errorPass: req.flash("errorPass"),
    });
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      req.flash("error", "Vui lòng nhập thông tin đầy đủ !!!");
      if (!email && !password) {
        req.flash("errorEmail", "Vui lòng nhập email !!!");
        req.flash("errorPass", "Vui lòng nhập password !!!");
      } else if (!email) {
        req.flash("errorEmail", "Vui lòng nhập email !!!");
      } else if (!password) {
        req.flash("errorPass", "Vui lòng nhập password !!!");
      }
    } else {
      const user = await User;
      const userList = await user.findOne({ where: { email: email } });

      if (userList) {
        if (userList.email === email && userList.password === md5(password)) {
          req.session.isLogged = true;
          return res.redirect("/");
        } else if (email) {
          req.flash("error", "Mật khẩu không chính xác");
        }
      } else {
        req.flash("error", "Email không chính xác");
      }

      return res.redirect("/dang-nhap");
    }
  },
  logout: (req, res) => {
    req.session.isLogged = false;
    req.flash("success", "Đăng xuất thành công");
    return res.redirect("/dang-nhap");
  },
};
