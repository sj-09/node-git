/**
 * Created by Nan on 2016/11/12.
 */
var express = require('express');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');

var path = require('path');
var ejs = require('ejs');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());
app.use(function (req, res, next) {
    res.locals.error = req.flash('error');
    res.locals.info = req.flash('info');
    next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', ejs.__express);


var routes = require('./routes')(app);
app.listen(8080, function () {
    console.log('Express server listening on port 8080 ');
});
