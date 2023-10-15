var express = require("express");
var router = express.Router();
const passport = require("passport");
const AuthController = require("../controllers/AuthController");

/* GET home page. */
const isLogin = (req, res, next) => {
  if (req.user) {
    res.redirect("/");
  }

  next();
};
router.get("/login", isLogin, AuthController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
  }),
  function (req, res) {
    res.redirect("/");
  },
  AuthController.handleLogin
);

module.exports = router;
