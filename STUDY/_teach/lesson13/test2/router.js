/**
 * Created by Nan on 2016/11/12.
 */
var express =require('express');

var app = express();

//requset ���������
//response ���ص���Ӧ
app.get('/', function (req, res) {
    res.send('hello world!');
});

app.get('/home', function (req, res) {
    res.send('home page');
});

app.get('/login', function (req, res) {
    res.send('login page');
});

app.get('/register', function (req, res) {
    res.send('regist page');
});
app.listen(8080,function(){
    console.log('Express server listening on port 8080 ');
});
