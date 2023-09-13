var express = require("express");
var router = express.Router();
const HomeController = require("../controllers/HomeController");
const LoginController = require("../controllers/LoginController");

/* GET home page. */
router.get("/", HomeController.index);

router.get("/dang-nhap", LoginController.index);
router.post("/dang-nhap", LoginController.login);
router.get("/dang-xuat", LoginController.logout);

module.exports = router;
