var express = require("express");
var router = express.Router();

const ShortLinkController = require("../controllers/ShortLinkController");

const isLogout = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth");
  }
  next();
};

/* GET home page. */
router.get("/", isLogout, ShortLinkController.index);
router.post("/", ShortLinkController.handlePostLink);
router.get("/srtlink/:urlcode", isLogout, ShortLinkController.getShortedLink);
router.get("/update/:urlcode", isLogout, ShortLinkController.updateLink);
router.post("/update/:urlcode", ShortLinkController.handleUpdateLink);
router.post("/delete/:urlcode", ShortLinkController.deleteLink);

module.exports = router;
