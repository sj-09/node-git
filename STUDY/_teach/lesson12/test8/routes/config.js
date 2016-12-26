/**
 * Created by Nan on 2016/11/11.
 */
var _routes = require('./index');
var _register = require('./regist');


module.exports = function (app) {
    //app.all('/all',function(){
    //
    //});
    app.get('/', _routes.index);
    app.get('/index', _routes.index);
    app.get('/login', _routes.index);
    app.get('/register', _register.register);
    app.get('/registerSuccess', _register.registerSuccess);
    app.post('/registerSubmit', _register.registerSubmit);
};