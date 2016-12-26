/**
 * Created by Nan on 2016/11/11.
 */
var express = require('express');
var app = express();

var users = [{ name: 'haonan' }];
app.all('/user/:id/:op?', function (req, res, next) {
    req.user = users[req.params.id];
    if (req.user) {
        next();
    } else {
        next(new Error('cannot find user ' + req.params.id));
    }
});
//req.params
app.get('/user/:id', function (req, res) {
    res.send('user ' + req.params.id);
});
app.listen();