/**
 * Created by Nan on 2016/11/12.
 */
var express = require('express');
var users = require('../dao/user');
var routes = express.Router();


routes.get('/', function (req, res) {

    users.userInfo(req, res);
});

module.exports.home = routes;