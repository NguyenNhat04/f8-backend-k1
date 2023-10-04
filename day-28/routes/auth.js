var express = require("express");
var router = express.Router();
const AuthController = require("../controllers/AuthController");

/* GET users listing. */
router.get("/login", AuthController.index);
router.post("/login", AuthController.login);
// router.get("/logout", AuthController.logout);
module.exports = router;
