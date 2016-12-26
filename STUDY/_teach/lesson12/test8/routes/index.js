/**
 * Created by Nan on 2016/11/11.
 */
var express = require('express');
var routes = express.Router();

routes.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

//����һ��
//module.exports.index = function (req, res) {
//    res.send('index');
//};


//��������
routes.get('/', function (req, res) {
    //res.send('index page');
    res.render('index', {title: 'Express'});
});
routes.get('/index', function (req, res) {
    res.render('index', {title: 'Express'});
});
routes.get('/login', function (req, res) {
    res.send('login page');
});


exports.index = routes;