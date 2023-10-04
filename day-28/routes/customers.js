express = require("express");
var router = express.Router();
const CustomerController = require("../controllers/CustomerController");
const CustomerValidate = require("../middlewares/CustomerValidate");

/* GET customer router */

router.get("/", CustomerController.getList);

router.get("/create", CustomerController.create);
router.post("/create", CustomerValidate(), CustomerController.handleCreate);

router.get("/update/:id", CustomerController.update);
router.post("/update/:id", CustomerValidate(), CustomerController.handleUpdate);

router.post("/destroy/:id", CustomerController.destroy);

module.exports = router;
