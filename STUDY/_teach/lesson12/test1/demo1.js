/**
 * Created by Nan on 2016/11/10.
 */

//����express ģ��
var express = require('express');
//ʵ����express
var app = express();


app.get('/', function (req,res) {
    res.send('hello world');
});

app.listen(8080, function () {
    console.log('listen 8080');
});