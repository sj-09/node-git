/**
 * Created by Nan on 2016/11/18.
 */
var express = require('express');
var User = require('../dao/__user');
var routes = express.Router();

routes.post('/reg', function (req, res) {
    var username = req.body.user;
    var password = req.body.pswd;
    var rpassword = req.body.rpswd;

    if (password != rpassword) {
        req.flash('error', '两次密码输入不一致');
        return res.redirect('/regist');
    }
    var oUser = new User({
        username: username,
        userpswd: password
    });

    User.get(username, function (err, result) {
        if (err) console.error(err);
        if (result.length) {
            req.flash('error', '用户名已经存在');
            return res.redirect('/regist');
        }
        oUser.save(function (err, result) {
            //console.log('受影响得行数：' + result.affectedRows);
            //console.log('插入行的id：' + result.insertId);
            //console.log('操作sql 返回的信息：' + result.message);
            req.flash('info', '注册成功');
            return res.redirect('/regist');
        })
    });
});

module.exports.reg = routes;