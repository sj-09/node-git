/**
 * Created by Nan on 2016/11/18.
 */
var express = require('express');
var app = express();

//jsonp 只支持 get 请求
app.get('/getUser', function (req, res) {

    var _callback = req.query.callback;
    var _username = req.query.name;
    var _password = req.query.pswd;

    var _data = {name: 'haonan', email: 'hei-nan@hotmail.com'};
    if (_callback) {
        res.type('text/javascript');
        console.log(_callback + '(' + JSON.stringify(_data) + ')');
        res.send(_callback + '(' + JSON.stringify(_data) + ')');
    }
    else {
        res.json(_data);
    }
});

app.get('/postUser', function (req, res) {

    var _callback = req.query.callback;
    var _username = req.query.name;
    var _password = req.query.pswd;

    var _data = {name: 'haonan', email: 'hei-nan@hotmail.com'};
    if (_callback) {
        res.type('text/javascript');
        console.log(_callback + '(' + JSON.stringify(_data) + ')');
		//得到_callback 需要把传递的json包括起来，服务器生成的数据才能被客户端接受
        res.send(_callback + '(' + JSON.stringify(_data) + ')');
    }
    else {
        res.json(_data);
    }
});

app.listen(8080, function () {
    console.log('listen port at 8080');
});