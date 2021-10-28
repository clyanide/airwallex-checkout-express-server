const express = require("express");
router = express.Router();

intent = require("../../controllers/intent");

router.post("/create", intent.createPaymentIntent);

module.exports = router;
