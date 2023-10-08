var express = require("express");
var router = express.Router();
const passport = require("passport");
const AuthController = require("../controllers/AuthController");
const ForgotPasswordController = require("../controllers/ForgotPasswordController");

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
    failureFlash: true,
  }),
  AuthController.handleLogin
);

router.get("/register", isLogin, AuthController.register);
router.post("/register", AuthController.handleRegister);

router.get("/logout", AuthController.logout);

router.get("/forgot-password", ForgotPasswordController.showForm);
router.post("/forgot-password", ForgotPasswordController.SendResetEmail);

router.get("/reset-password/:token", ForgotPasswordController.resetPassword);
router.post("/reset-password/:token", ForgotPasswordController.handleReset);
module.exports = router;
