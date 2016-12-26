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
        var data = {errCode: '1', errMessage: 'request filed', isSuccess: false};
        res.json(data);
    } else {
        var data = {errCode: 0, errMessage: 'request success', data: ret[0], isSuccess: true};
        res.json(data);
    }
};
module.exports = {
    queryUser: function (req, res, username, password) {
        var $query = 'select * from tb_user where username=\'' + username + '\' and password=\'' + password + '\'';
        pool.getConnection(function (err, connection) {
            connection.query($query, function (err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    }
};