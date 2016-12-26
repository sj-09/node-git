/**
 * Created by Nan on 2016/11/12.
 */
var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();
var routes = require('./routes')(app);


//设置views 文件夹的指向路径
app.set('views', path.join(__dirname, 'views'));

//设置视图引擎的格式
app.set('view engine', 'html');

//渲染引擎 ,view engine默认的视图（view）引擎的名字，不包含扩展名。
app.engine('html', ejs.__express);

//express.static(path); 静态文件访问
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'routes')));


//app.all()它的作用是对于一个路径上的所有请求加载中间件。
//app.all('/', function (req, res, next) {
//    console.log('Accessing visited in the app.all() ...');
//    next();
//});
//应用级中间件
//app.get('/', function (req, res, next) {
//    console.log(path.normalize(req.url));
//    console.log('index page ');
//    next();
//}, function (req, res) {
//    //requset 发起的请求
//    //response 返回的响应
//    res.send('hello world!');
//});


app.listen(8080, function () {
    console.log('Express server listening on port 8080 ');
});
