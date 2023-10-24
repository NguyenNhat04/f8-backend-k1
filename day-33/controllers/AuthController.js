const model = require("../models/index");
const User = model.User;
const bcrypt = require("bcrypt");

module.exports = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: async (req, res) => {
    res.render("auth/register");
  },
  handleRegister: async (req, res) => {
    const { email, password } = req.body;
    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);
    await User.create({
      email: email,
      password: hashPassword,
    });

    res.redirect("/auth/login");
  },
};
