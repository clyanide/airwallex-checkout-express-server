const express = require("express");
router = express.Router();

auth = require("../../controllers/auth");

router.post("/login", auth.login);

module.exports = router;
