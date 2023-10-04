var express = require("express");
var router = express.Router();
const EmailController = require("../controllers/EmailController");

/* GET users listing. */
router.get("/send-email", EmailController.getSendEmail);
router.post("/send-email", EmailController.sendEmail);

router.get("/email-history", EmailController.getHistory);

router.get("/email-detail/:id", EmailController.getEmailDetail);

module.exports = router;
