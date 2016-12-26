/**
 * Created by Nan on 2016/11/19.
 */

var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
//Get json∂‘œÛ
app.get('/getJson', function (req, res) {
    var data = {name: 'gaowenya', age: '18'};
    res.json(data);
});

app.get('/postJson', function (req, res) {

    var _callback = req.query.callback;
    if (_callback) {
        var data = {name: 'tangbeibei', age: '3'};
        //res.send(_callback + '(' + JSON.stringify(data) + ')');
        res.jsonp(data);
    }

});

app.listen(8080, function () {
    console.log('listen port at 8080');
});