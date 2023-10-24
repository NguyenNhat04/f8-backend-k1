var express = require("express");
var router = express.Router();
const SortLinkController = require("../controllers/SortLinkController");
router.get("/", SortLinkController.index);

module.exports = router;
