/**
 * Created by Nan on 2016/11/11.
 */
var express = require('express');
var routes = express.Router();


exports.register = function (req, res) {
    res.render('regist', {title: 'ע��ҳ'});
};
exports.registerSubmit = function (req, res) {
    var data = {errCode:0,isSuccess:true,msg:'�ɹ�'};
    res.json(data);
};

exports.registerSuccess = function (req, res) {
    res.render('registSuccess', {title: 'ע��ɹ�'});
}