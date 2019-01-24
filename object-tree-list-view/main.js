let obj = {
    a : {
        aa : {
            aaa: {
                aaaa : "string aaaa"
            },
            bbb: "string bbb"
        },
        a1 : "string a1"
    },
    b : {
        bb : "string bb"
    }
};

window.onload = function () {
    let str = '';
    const traverse = (obj) => {
        str += '<ul>';
        for (let k in obj) {
            str += '<li><span>' + k + '</span>';
            if (obj[k] && typeof obj[k] === 'object') {
                traverse(obj[k])
            } else {
                str += '<ul><li><span>value : ' + obj[k] + '</span></li></ul>';
            }
            str += '</li>';
        }
        str += '</ul>';
    };
    traverse(obj);
    document.getElementsByClassName('container')[0].innerHTML = str;
};