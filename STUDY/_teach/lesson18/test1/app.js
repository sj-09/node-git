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

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/post', function (req, res) {
    res.render('post');
});

app.listen(8088, function () {
    console.log('listen port at 8088');
});