/**
 * Created by Nan on 2016/11/17.
 */
var express = require('express');
var routes = express.Router();


routes.get('/regist', function (req, res) {
    res.render('regist', {title: '注册'});
});

module.exports.regist = routes;