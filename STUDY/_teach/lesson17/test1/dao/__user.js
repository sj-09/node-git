/**
 * Created by Nan on 2016/11/18.
 */

var mysql = require('mysql');
var $conf = require('../conf/conf');
var $util = require('../util/util');

var pool = mysql.createPool($util.extend({}, $conf.mysqlOptions, true));

function User(user) {
    this.username = user.username;
    this.userpswd = user.userpswd;
}
//读取用户信息
User.get = function (name, callback) {
    $sql = "select * from tb_user where username=?";
    $val = [name];
    pool.getConnection(function (err, connect) {
        if (err) return console.error(err);
        connect.query($sql, $val, function (err, result) {
            callback(err, result);
            connect.release();
        });
    });
};

//存储用户信息
User.prototype.save = function (callback) {
    var $sql = "insert into tb_user set username=?,password=?";
    var $val = [this.username, this.userpswd];
    pool.getConnection(function (err, connect) {
        if (err) return console.error(err);
        connect.query($sql, $val, function (err, result) {
            callback(err, result);
            connect.release();
        });
    });
};


module.exports = User;