var express = require("express");
var router = express.Router();

const UploadController = require("../controllers/UploadController");
const UploadMiddleware = require("../middlewares/UploadMiddleware");
const AuthMiddleware = require("../middlewares/AuthMiddleware");
/* GET users listing. */
router.post("/", AuthMiddleware, UploadMiddleware, UploadController.upload);
router.get("/", AuthMiddleware, UploadController.getFiles);

module.exports = router;
