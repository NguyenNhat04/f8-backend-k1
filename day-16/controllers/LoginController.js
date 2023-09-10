const fs = require("fs");

module.exports = {
  index: (req, res) => {
    const { email, password } = req.session;

    const dataFilePath = "./data/Account.json";
    const rawData = fs.readFileSync(dataFilePath);
    const users = JSON.parse(rawData);

    const user = users.find(
      (userData) => userData.email === email && userData.password === password
    );

    if (user) {
      return res.redirect("/home");
    } else {
      req.flash(
        "errorMessage",
        "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập."
      );
      return res.render("Login/index");
    }
  },

  handleLogin: (req, res) => {
    const { email, password } = req.body;

    if (email === "" || password === "") {
      req.flash("errorMessage", "Vui lòng nhập cả email và mật khẩu.");
      return res.render("Login/index");
    } else {
      req.session.email = email;
      req.session.password = password;
      return res.redirect("/login");
    }
  },
};
