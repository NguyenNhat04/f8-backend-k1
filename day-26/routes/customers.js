var express = require("express");
const models = require("../models/index");
var router = express.Router();
const customerController = require("../controllers/customerController");
const CustomerValidate = require("../middlewares/CustomerValidate");

router.get("/", customerController.index);

router.get("/create", customerController.create);
router.post("/create", CustomerValidate(), customerController.store);

router.get("/edit/:id", customerController.edit);
router.post("/edit/:id", CustomerValidate(), customerController.update);

router.post("/destroy/:id", customerController.destroy);
module.exports = router;
