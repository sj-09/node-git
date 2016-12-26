/**
 * Created by Nan on 2016/11/15.
 */

//var loginDao = require('../dao/login');
//var express = require('express');
//var login = function (req, res) {
//    console.log(req.query.id);
//    console.log(req.body.user);
//    console.log(req.body.pswd);
//    var data = {errCode: 0, errMessage: '', name: 'haonan111', isSuccess: true};
//    res.json(data);
//};
//module.exports.login = login;

var loginDao = require('../dao/login');
var express = require('express');
var routes = express.Router();

routes.post('/userLogin', function (req, res) {
    var user = loginDao.login();

    var userName = req.body.user;
    var userPswd = req.body.pswd;
    
    if (userName == user.userName && userPswd == user.passWord) {
        var data = {errCode: 0, errMessage: '', data: '成功！', isSuccess: true};
        res.json(data);
    } else {
        var data = {errCode: 1, errMessage: '账号或密码错误', data: '失败！', isSuccess: false};
        res.json(data);
    }


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