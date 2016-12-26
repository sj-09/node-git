/**
 * Created by sunjian on 2016/11/20.
 */

//引入express模块
var express = require('express');
//引入bodyParser模块
var bodyParser = require('body-parser');
//引入ejs模块
var ejs = require('ejs');
//引入path模块
var path = require('path');
//实例化express对象
var app = express();

//视图文件路径指向
app.set('views', path.join(__dirname, 'views'));
//ejs 模板引擎格式
app.set('view engine', 'ejs');
//设置静态文件服务路径
app.use(express.static(path.join(__dirname, 'public')));
//设置bodyParser url解析编码规则
app.use(bodyParser.urlencoded({extended: false}));

//引入外置路由模块，传递当前应用实例化对象app
var routes = require('./conf/config')(app);

//监听8080端口，回调函数在控制台输出提示
app.listen(3000, function () {
    console.log('listen port at 8080');
});