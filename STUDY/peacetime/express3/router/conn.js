/**
 * Created by sunjian on 2016/11/16.
 */
//�������ݿ�
var mysql=require("mysql");
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
serv.query("select * from study where name='mine'&&psd='123456' ",function(err,data){
    if(err){
        return console.error(err)
    }
   if(data.length>0){
       module.exports.loginDate=function(){
           return data[0];
       }
   }

})

serv.end();