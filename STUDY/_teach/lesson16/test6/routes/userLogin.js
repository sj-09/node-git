/**
 * Created by Nan on 2016/11/15.
 */
var loginDao = require('../dao/login');
var express = require('express');
var routes = express.Router();

routes.post('/userLogin', function (req, res) {
    var username = req.body.user;
    var userpswd = req.body.pswd;
    var user = loginDao.queryUser(req, res, username, userpswd);
});
module.exports.login = routes;
