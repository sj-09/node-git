/**
 * Created by Nan on 2016/11/12.
 */
var _index = require('./home');
var _home = require('./home');
var _login = require('./login');
var _userLogin = require('./userLogin');


module.exports = function (app) {
    app.get("/", function (req, res) {
        res.redirect('/login');
    });
    app.get("/home", _home.home);
    app.get("/login", _login.login);
    app.post('/userLogin', _userLogin.login);
    app.get('/getJson', function (req, res, next) {
        var _callback = req.query.callback;
        var _data = {name: 'haonan', email: 'hei-nan@hotmail.com'};
        if (_callback) {
            res.type('text/javascript');
            res.send(_callback + '(' + JSON.stringify(_data) + ')');
        }
        else {
            res.json(_data);
        }
    });
};