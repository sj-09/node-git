/**
 * Module dependencies.
 */
var http = require('http');
var path = require('path');
var ejs = require('ejs');
var express = require('express');

//创建一个express的实例
var app = express();
var routes = require('./routes/config')(app);

app.engine('html', ejs.__express);
//render engine,view engine默认的视图（view）引擎的名字，不包含扩展名。
app.set('view engine', 'html');
//views视图（views）层的根目录，默认指向CWD/views
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 8080);



//方法一：
//app.get('/', function(req,res){
//    res.send('index');
//});
//方法二：


//写法一：
//http.createServer(app).listen(app.get('port'), function () {
//    console.log('Express server listening on port ' + app.get('port'));
//});
//写法二：
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
