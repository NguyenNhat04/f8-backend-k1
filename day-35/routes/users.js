var express = require("express");
var router = express.Router();
const UserController = require("../controllers/UserController");
const CheckUser = require("../middlewares/CheckUser");

/* GET users listing. */
router.get("/", UserController.index);

router.get("/:id", CheckUser.check, UserController.view);

router.post("/", UserController.store);

router.put("/:id", CheckUser.check, UserController.edit);

router.delete("/:id", CheckUser.check, UserController.delete);

module.exports = router;
