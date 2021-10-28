const router = require("express").Router();

router.use("/auth", require("./auth"));
router.use("/intent", require("./intent"));

module.exports = router;
