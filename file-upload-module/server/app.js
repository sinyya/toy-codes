const express = require('express');
const app = express();

/**
 * routing controller 연결
 */
app.use('/upload', require('./api/upload'));

app.listen(3030, ()=>{
    //server 구동 완료
    console.log('Example app listening on port 3030!')
})