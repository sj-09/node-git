/**
 * Created by Nan on 2016/11/12.
 */
var express = require('express');
var user = require('../dao/user');
var routes = express.Router();


console.log(user.user);
routes.get('/', function (req, res) {
    user.user(req, res);
});

module.exports.home = routes;