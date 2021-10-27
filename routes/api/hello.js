const express = require("express");
router = express.Router();

hello = require("../../controllers/hello");
error = require("../../controllers/error");

router.get("/", hello.hello);

router.get("*", error.invalidUrl);

module.exports = router;
