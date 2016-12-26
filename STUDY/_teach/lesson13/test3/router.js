/**
 * Created by Nan on 2016/11/12.
 */
var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();
var routes = require('./routes')(app);


//����views �ļ��е�ָ��·��
app.set('views', path.join(__dirname, 'views'));

//������ͼ����ĸ�ʽ
app.set('view engine', 'html');

//��Ⱦ���� ,view engineĬ�ϵ���ͼ��view����������֣���������չ����
app.engine('html', ejs.__express);

//express.static(path); ��̬�ļ�����
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'routes')));


//app.all()���������Ƕ���һ��·���ϵ�������������м����
//app.all('/', function (req, res, next) {
//    console.log('Accessing visited in the app.all() ...');
//    next();
//});
//Ӧ�ü��м��
//app.get('/', function (req, res, next) {
//    console.log(path.normalize(req.url));
//    console.log('index page ');
//    next();
//}, function (req, res) {
//    //requset ���������
//    //response ���ص���Ӧ
//    res.send('hello world!');
//});


app.listen(8080, function () {
    console.log('Express server listening on port 8080 ');
});
