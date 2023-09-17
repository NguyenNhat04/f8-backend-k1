const md5 = require("md5");
const User = require("../models/User");

module.exports = {
  index: async (req, res) => {
    const msg = req.flash("msg");
    res.render("register", { msg });
  },
  handeRegister: async (req, res) => {
    const { email, password } = req.body;
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        password: md5(password),
      },
    });
    if (created) {
      req.flash("msg", "Tạo tài khoản thành công");
    } else {
      req.flash("msg", "Tài khoản đã tồn tại");
    }
    res.redirect("/login");
  },
};
