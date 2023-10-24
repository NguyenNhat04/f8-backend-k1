var express = require("express");
var router = express.Router();
const AuthController = require("../controllers/AuthController");
const passport = require("passport");
// const isLogin = (req, res, next) => {
//   if (req.user) {
//     res.redirect("/short-link");
//     return;
//   }

//   next();
// };

router.get("/login", AuthController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
    // successRedirect: "/short-link",
  })
);

router.get("/register", AuthController.register);
router.post("/register", AuthController.handleRegister);

module.exports = router;
