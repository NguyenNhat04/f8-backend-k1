var express = require("express");
var router = express.Router();
const CustomerController = require("../controllers/CustomerController");
const CustomerValidate = require("../middlewares/CustomerValidate");

router.get("/", CustomerController.index);
router.get("/create", CustomerController.create);
router.post("/create", CustomerValidate(), CustomerController.store);
router.get("/update/:id", CustomerController.update);
router.post("/update/:id", CustomerValidate(), CustomerController.handeUpdate);
router.get("/delete/:id", CustomerValidate(), CustomerController.delete);

module.exports = router;
