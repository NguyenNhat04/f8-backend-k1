var express = require("express");
var router = express.Router();
const RegisterController = require("../controllers/RegisterController");

/* GET users listing. */

router.get("/", RegisterController.index);
router.post("/", RegisterController.handleRegister);
router.get("/active/:token", RegisterController.active);

module.exports = router;
