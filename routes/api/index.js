const router = require('express').Router();

router.use('/airwallex', require('./airwallex'));

module.exports = router;
