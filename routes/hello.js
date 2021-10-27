const express = require("express");
router = express.Router();
hello = require("../controllers/hello");
invalid = require("../controllers/invalidUrl");

router.get("/", hello.hello);

router.get("*", invalid.invalidUrl);

module.exports = router;
