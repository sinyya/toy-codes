const express = require('express');
const router = express.Router();

router.get('/:type/:key/:fileName', function (req, res) {
    var type = req.params.type,
        key = req.params.key,
        fileName = req.params.fileName;
    res.sendfile(fileName, {root: `./data/${type}/${key}`});
})

module.exports = router;
