/**
 * Created by Nan on 2016/11/15.
 */
var mysql = require('mysql');
var $conf = require('../conf/conf');
var $util = require('../util/util');

//�������ݿ�����
var pool = mysql.createPool($util.extend({}, $conf.mysqlOptions));


// ��ǰ̨����JSON�����ļ򵥷�װ
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '����ʧ��'
        });
    } else {
        res.json(ret);
    }
};
module.exports = {
    queryUser: function (req, res, username, password) {
        var $query = 'select * from login where userName=\'' + username + '\' and passWord=\'' + password + '\'';
        pool.getConnection(function (err, connection) {
            connection.query($query, function (err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    }
};