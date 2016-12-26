/**
 * Created by Nan on 2016/11/12.
 */
var _home = require('./home');
var _login = require('./login');
var _userLogin = require('./userLogin');


module.exports = function (app) {
    app.get("/", _home.home);
    app.get("/login", _login.login);
    app.post('/userLogin', _userLogin.login);
};