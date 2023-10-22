var express = require("express");
var router = express.Router();
const passport = require("passport");

const AuthController = require("../controllers/AuthController");
const GuestMiddleware = require("../middlewares/GuestMiddleware");

/* GET users listing. */
router.get("/login", GuestMiddleware, AuthController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
    successRedirect: "/",
  })
);

module.exports = router;
