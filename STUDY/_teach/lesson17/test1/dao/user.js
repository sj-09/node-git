/**
 * Created by Nan on 2016/11/15.
 */
var mysql = require('mysql');
var $conf = require('../conf/conf');
var $util = require('../util/util');

//创建数据库连接
var pool = mysql.createPool($util.extend({}, $conf.mysqlOptions));


function User(user) {
    this.name = user.name;
    this.password = user.password
}
//读取用户信息
User.get = function (name, callback) {

    pool.getConnection(function (err, connection) {
        if (err) {
            return callback(err);
        }
        var $query = "select * from tb_user where username=?";
        var $val = [name];
        connection.query($query, $val, function (err, result) {
            if (err) {
                connection.release();
                return callback(err);
            }
            callback(null, result[0]);
        });
    });
};
//存储用户信息
User.prototype.save = function (callback) {
    var user = {
        name: this.name,
        password: this.password
    };
    //var $query = 'select * from tb_user where username=\'' + user.name + '\' and password=\'' + user.password + '\'';
    pool.getConnection(function (err, connection) {
        if (err) {
            return callback(err);
        }
        var $query = "insert into tb_user set username=?,password=?";
        var $val = [user.name, user.password];
        connection.query($query, $val, function (err, result) {
            if (err) {
                connection.release();
                return callback(err);
            }
            console.log('Inserted: ' + result.affectedRows + ' row.');
            console.log('Id inserted: ' + result.insertId);
            callback(null, result[0]);
        });
    });
};

module.exports = User;