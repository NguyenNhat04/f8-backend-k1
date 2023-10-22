var express = require("express");
var router = express.Router();

const RoleController = require("../controllers/RoleController");
const UserMiddleware = require("../middlewares/UserMiddleware");

router.get("/", UserMiddleware.read, RoleController.index);
router.get("/add", UserMiddleware.add, RoleController.add);
router.post("/add", RoleController.handleAdd);

router.get("/edit/:id", UserMiddleware.update, RoleController.edit);
router.post("/edit/:id", RoleController.handleEdit);

router.post("/delete/:id", UserMiddleware.delete, RoleController.delete);

module.exports = router;
