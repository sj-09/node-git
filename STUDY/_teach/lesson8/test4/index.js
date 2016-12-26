var http = require("http");

//创建一个get 请求
//var req = http.get("http://www.baidu.com", function (res) {
var req = http.get("http://172.27.0.200/examadmin/index.php?r=Home/index#", function (res) {

    //定义post 数组
    var bodyChunks = [];
    //当有数据流出时
    res.on('data', function (chunk) {
        //push到数组
        bodyChunks.push(chunk);
    }).on('end', function () {
        var body = Buffer.concat(bodyChunks);
        console.log("Response BODY: " + body);
        console.log('The request end...')
    });
});

req.on('error', function (e) {
    console.log("ERROR: " + e.message);
});
