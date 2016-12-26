/**
 * Created by Nan on 2016/11/19.
 */


var express = require('express');
var ejs = require('ejs');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', ejs.__express);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('getPost');
});

app.listen(8088, function () {
    console.log('listen port at 8088');
});



