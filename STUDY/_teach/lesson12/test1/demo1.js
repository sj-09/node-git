/**
 * Created by Nan on 2016/11/10.
 */

//引入express 模块
var express = require('express');
//实例化express
var app = express();


app.get('/', function (req,res) {
    res.send('hello world');
});

app.listen(8080, function () {
    console.log('listen 8080');
});