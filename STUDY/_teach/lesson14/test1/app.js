/**
 * Created by Nan on 2016/11/14.
 */
var express = require('express');
var path = require('path');
var ejs = require('ejs');


var app = express();

//THIS IS CONFIGERS
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);


//THIS IS ROUTERS
app.get('/', function (req, res) {
    res.render('index', {title: 'ejs demo index', name: '¸ßÎÄÑÅ'});
});

//LISTEN PROT
app.listen(app.get('port'), function () {
    console.log('listen port at 8080');
});