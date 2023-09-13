var express = require("express");
var router = express.Router();
const HomeController = require("../controllers/HomeController");
const LoginController = require("../controllers/LoginController");

/* GET home page. */

router.get("/dang-nhap", LoginController.showForm);
router.post("/dang-nhap", LoginController.login);
router.get("/dang-xuat", LoginController.logout);

router.get("/", HomeController.index);
module.exports = router;
