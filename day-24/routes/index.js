var express = require("express");
var router = express.Router();
const HomeController = require("../controllers/HomeController");

router.get("/", HomeController.index);

module.exports = router;
