const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    console.log('checkServer :::::');
    console.log('Checked!');
    res.json({ status: 200, msg: "서버가 연결되어있습니다." })
});

module.exports = router;