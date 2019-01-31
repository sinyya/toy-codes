const express = require('express');
const app = express();

/**
 * routing controller 연결
 */
app.use('/download', require('./api/download'));

app.listen(3000, ()=>{
    //server 구동 완료
    console.log('Example app listening on port 3000!')
})