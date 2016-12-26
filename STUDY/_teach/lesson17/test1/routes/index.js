/**
 * Created by Nan on 2016/11/12.
 */
var _index = require('./home');
var _home = require('./home');
var _login = require('./login');
var _userLogin = require('./userLogin');
var _regist = require('./regist');
var _reg = require('./_reg');


module.exports = function (app) {
    app.get("/", function (req, res) {
        res.redirect('/home');
    });
    app.get("/home", _home.home);
    app.get("/login", _login.login);
    app.get("/regist", _regist.regist);
    app.post('/userLogin', _userLogin.login);
    app.post('/reg', _reg.reg);
};