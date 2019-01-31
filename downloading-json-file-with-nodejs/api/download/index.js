const express = require('express');
const router = express.Router();

const controller = require('./download.controller');

router.get('/:key', controller.download);

module.exports = router;