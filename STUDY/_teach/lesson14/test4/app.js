/**
 * Created by Nan on 2016/11/12.
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var ejs = require('ejs');


var app = express();
var routes = require('./routes')(app);


app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

//路由级别中间件
//app.get('./index',function(req,res,next){
//    console.log('this is index page zhongjianjian');
//    next();
//},function(req,res){
//    res.render('index');
//});

//this is index router

//app.use('/index', function (req,res,next) {
//    console.log('this is index page zhongjianjian');
//    next();
//});
//app.get('/index',function(req,res){
//    res.render('index');
//});



app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
app.listen(8080, function () {
    console.log('Express server listening on port 8080 ');
});
