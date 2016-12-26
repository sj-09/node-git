/**
 * Created by Nan on 2016/11/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var path = require('path');


var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', ejs.__express);

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes')(app);

app.listen(8080, function () {
    console.log('listen port at 8080');
});