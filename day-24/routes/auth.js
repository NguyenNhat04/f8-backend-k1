var express = require("express");
const AuthController = require("../controllers/AuthController");
var router = express.Router();

router.get("/login", AuthController.index);
router.get("/logout", AuthController.logout);
router.post("/login", AuthController.handeLogin);

module.exports = router;
