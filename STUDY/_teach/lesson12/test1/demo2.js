/**
 * Created by Nan on 2016/11/10.
 */
var express = require('express');
var app = express();

//访问静态文件
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
