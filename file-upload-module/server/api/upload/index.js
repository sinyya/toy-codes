const express = require('express');
const router = express.Router();

const multer = require('multer');

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './data/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.png')
    }
})

const upload = multer({ storage : storage });

var cpUpload = upload.fields([{ name: 'image01', maxCount: 1 }, { name: 'image02', maxCount: 1 }])

router.post('/image', cpUpload, function (req, res, next) {
    console.log("image upload success")
    res.json({ status: 200, msg: "이미지 업로드 완료" })
})


module.exports = router;