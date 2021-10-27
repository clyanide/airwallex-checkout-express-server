const express = require("express");
router = express.Router();

auth = require("../../controllers/auth");

router.get("/getToken", auth.getToken);

module.exports = router;
