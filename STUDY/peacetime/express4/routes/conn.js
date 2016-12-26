/**
 * Created by sunjian on 2016/11/17.
 */
var mysql=require("mysql");

var options={
    host:"127.0.0.1",
    user:"root",
    password:"123",
    port:3306,
    database:"stu"
}

var server=mysql.createConnection(options);

server.connect();

server.query("select * from study where name='mine' and psd='123456' ",function(err,data){
       if(err){
           console.error(err);
       }
    module.exports.Data=function(){
        return data[0];
    }
});

server.end();