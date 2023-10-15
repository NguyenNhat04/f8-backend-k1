var express = require("express");
var router = express.Router();
const RoleController = require("../controllers/RoleController");

router.get("/", RoleController.index);
router.get("/add-role", RoleController.create);
router.post("/add-role", RoleController.handleCreate);

router.get("/edit/:id", RoleController.edit);
router.post("/edit/:id", RoleController.handleEdit);

module.exports = router;
