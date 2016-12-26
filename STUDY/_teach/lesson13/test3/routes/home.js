/**
 * Created by Nan on 2016/11/12.
 */
var express = require('express');
var routes = express.Router();

routes.get('/', function (req, res) {
    res.render('index');
});

module.exports.home = routes;