/**
 * Created by Nan on 2016/11/17.
 */

var express = require('express');
var User = require('../dao/user');
var routes = express.Router();
routes.post('/reg', function (req, res) {
    var user = req.body.user,
        pswd = req.body.pswd,
        rpswd = req.body.rpswd;
    console.log(pswd);
    if (pswd != rpswd) {
        //form表单提交，刷新页面
        req.flash('error', "用户名或密码错误");
        return res.redirect('regist');
    }
    var newUser = new User({
        name: user,
        password: pswd
    });
    User.get(user, function (err, user) {
        if (user) {
            //req.flash('error', '用户已存在!');
            console.log('用户已存在!');
            return;
            //return res.redirect('/reg');//返回注册页
        }
        //如果不存在则新增用户
        newUser.save(function (err, user) {
            if (err) {
                //req.flash('error', err);
                console.log('add user error');
                //return res.redirect('/reg');//注册失败返回主册页
            }
            console.log(user);
            //req.session.user = user;//用户信息存入 session
            //req.flash('success', '注册成功!');
            //res.redirect('/');//注册成功后返回主页
        });
    })

});
module.exports.reg = routes;