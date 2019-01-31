const firebase = require('firebase');

let setFirebase = function(key, callback){
    /**
     * firebase 설정
     */
    var config = {
        apiKey: "AIzaSyA5_tgkn0XlgAYTj8E94cLs7HUpwATWjx0",
        authDomain: "fcrudex.firebaseapp.com",
        databaseURL: "https://fcrudex.firebaseio.com",
        projectId: "fcrudex",
        storageBucket: "fcrudex.appspot.com",
        messagingSenderId: "948224711618"
    };
    firebase.initializeApp(config);
    console.log('firebase initializing.......');
    /**
     * 서버구동이 완료 되면 db연결 시작
     */
    console.log('fetchFirebaseData !!!!');

    firebase.database().ref('/usersData/'+key).once('value')
        .then((data)=>{
            /**
             * 전체 Database Object
             */
            console.log('success !!!!');
            // console.log(data.val());
            callback(data.val());
        })
        .catch((error)=>{console.log(error)})
};

/**
 * download
 */
exports.download = (req, res) => {
    console.log('Download :::::');
    // 데이터 저장하기 구현
    var data = "데이터를 저장합니다 " + new Date();
    console.log(data);

    // key 확인
    console.log(req.params.key);

    setFirebase(req.params.key, function (jsonObj) {
        const fs = require('fs');
        var jsonString = JSON.stringify(jsonObj,null,"\t");

        // file write
        fs.writeFile('./data/user_'+req.params.key+'.json', jsonString, function (err) {
            if (err) throw err;
            console.log('Saved!');
            var path = './data/user_'+req.params.key+'.json';
            // download
            res.download(path);
        });

    });
};

