var express = require("express");
var router = express.Router();
const AuthController = require("../controllers/auth.controller");

/* GET users listing. */
router.post("/login", AuthController.login);
router.get("/profile", AuthController.profile);
router.post("/refresh-token", AuthController.refreshToken);
router.post("/logout", AuthController.logout);

module.exports = router;
