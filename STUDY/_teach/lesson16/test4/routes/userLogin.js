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


    //var str = 'select * from login where userName="' + userName + '" and passWord="' + userPswd + '"';
    //var str = 'select * from login where userName=\'' + userName + '\' and passWord=\'' + userPswd + '\'';
    //if (userName == user.userName && userPswd == user.passWord) {
    //    var data = {errCode: 0, errMessage: '', data: resulet, isSuccess: true};
    //    res.json(data);
    //} else {
    //    var data = {errCode: 1, errMessage: '账号或密码错误', data: '失败！', isSuccess: false};
    //    res.json(data);
    //}


});
module.exports.login = routes;


//var createServerJson = function (code, msg, flag, data) {
//    var oJson = {
//        errCode: code,
//        errMsg: msg,
//        isSuccess: flag,
//        datas: data
//    };
//    return oJson;
//};