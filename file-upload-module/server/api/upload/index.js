const express = require('express');
const router = express.Router();

const controller = require('./upload.controller');

router.get('/', controller.checkServer);
router.get('/image/:url', controller.upload); // 테스트용
router.post('/image/:url', controller.upload); // 연결용

module.exports = router;