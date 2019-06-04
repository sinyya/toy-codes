const express = require('express');
const router = express.Router();
const fs = require('fs');

const multer = require('multer');

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // key 확인
        // console.log(req.params.key);

        // type 확인
        let type = file.fieldname.split('_')[0]

        // 폴더 생성
        fs.mkdir('./data/' + type + '/' + req.params.key + '/', function(err){
            // if ( err.code != 'EEXIST' ) throw err;
            // console.log('err :: ' + err.code)

            cb(null, './data/' + type + '/' + req.params.key + '/')
        });
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '.png')
    }
})

const upload = multer({ storage : storage });

var cpUpload = upload.fields([{ name: 'image_01', maxCount: 1 }, { name: 'image_02', maxCount: 1 },{ name: 'thumbnail_01', maxCount: 1 }, { name: 'thumbnail_02', maxCount: 1 }])

router.post('/image/:key', cpUpload, function (req, res, next) {
    console.log("image upload success")
    res.json({ status: 200, msg: "이미지 업로드 완료" })
})


module.exports = router;
