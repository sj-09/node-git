/**
 * Created by sunjian on 2016/11/16.
 */
//载入数据库
var mysql=require("mysql");
var N=require("../config.js");
//设置数据库参数
var options={
    host:"127.0.0.1",
    user:"root",
    password:"123",
    port:3306,
    database:"stu"
}
//创建数据库的链接
var serv=mysql.createConnection(options);
//开启服务
serv.connect();
//
serv.query("select * from sele where name='张三'",function(err,data){
    if(err){
        return console.error(err)
    }

    module.exports.D=function(){
        return data[0];
    }

});

serv.end();