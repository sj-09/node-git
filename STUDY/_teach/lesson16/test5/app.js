/**
 * Created by Nan on 2016/11/12.
 */
var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');
var ejs = require('ejs');
var app = express();


//设置渲染视图的文件路径
app.set('views', path.join(__dirname, 'views'));
//设置视图引擎格式，默认是.ejs,可以修改成.html
app.set('view engine', 'html');
//Express的渲染引擎改为html
app.engine('html', ejs.__express);
app.use(bodyParser.urlencoded({extended: false}));
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes')(app);
app.listen(8080, function () {
    console.log('Express server listening on port 8080 ');
});
