var express = require("express");
var router = express.Router();

const authenticateToke = require("../middlewares/auth.middleware");
/* GET users listing. */
router.get("/login", authenticateToke, (req, res) => {
  res.redirect("http://localhost/project-a/users/login");
});
router.get("/logout", authenticateToke, (req, res) => {
  res.redirect("http://localhost/project-a/users/logout");
});

module.exports = router;
