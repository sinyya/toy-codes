const express = require('express');
const multer = require('multer');

/**
 * checkServer
 * 서버 연결을 체크한다.
 */
exports.checkServer = (req, res) => {
    console.log('checkServer :::::');
    console.log('Checked!');
    res.json({ status: 200, msg: "서버가 연결되어있습니다." })
};


/**
 * upload
 */
exports.upload = (req, res) => {
    console.log('upload :::::::::::::::::::::::::');

    console.log("req.params.url")
    console.log(req.params.url)

};



