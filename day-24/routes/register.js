var express = require("express");
var router = express.Router();
const RegisterController = require("../controllers/RegisterController");

router.get("/", RegisterController.index);
router.post("/", RegisterController.handeRegister);

module.exports = router;
