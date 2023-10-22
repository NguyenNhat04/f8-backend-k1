var express = require("express");
var router = express.Router();

const UserController = require("../controllers/UserController");

const UserMiddleware = require("../middlewares/UserMiddleware");

/* GET users listing. */
router.get("/", UserController.index);

router.get(
  "/permission/:id",
  UserMiddleware.isAdmin,
  UserController.permission
);

router.post("/permission/:id", UserController.handlePermission);

module.exports = router;
