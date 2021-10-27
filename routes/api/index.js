var router = require("express").Router();

router.use("/hello", require("./hello"));
router.use("/auth", require("./auth"));

module.exports = router;
