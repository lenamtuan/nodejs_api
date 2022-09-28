var express = require('express');
var router = express.Router();
var api = require('../api/api');
router.get('/inputdata',api.inputdata);

module.exports = router;