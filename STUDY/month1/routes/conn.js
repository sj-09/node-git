/**
 * Created by sunjian on 2016/11/16.
 */
//�������ݿ�
var mysql=require("mysql");
var N=require("../config.js");
//�������ݿ����
var options={
    host:"127.0.0.1",
    user:"root",
    password:"123",
    port:3306,
    database:"stu"
}
//�������ݿ������
var serv=mysql.createConnection(options);
//��������
serv.connect();
//
serv.query("select * from sele where name='����'",function(err,data){
    if(err){
        return console.error(err)
    }

    module.exports.D=function(){
        return data[0];
    }

});

serv.end();