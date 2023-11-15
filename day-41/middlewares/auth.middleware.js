const model = require("../models/index");
const Login_token = model.Login_token;
const User = model.User;

module.exports = async (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/login");
  }
  // const { email } = req.body;
  // const cookie = req.headers.cookie.token;
  // await Login_token.findAll({
  //   where: {
  //     token: cookie,
  //   },
  // });

  next();
};
