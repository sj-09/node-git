/**
 * Created by sunjian on 2016/11/21.
 */
//����expressģ��
var express=require("express");
//ʵ����
var app=express();
//����ejsģ��
var ejs=require("ejs");
//����pathģ��
var path=require("path");
//����body-parser�м��
var bodyparser=require("body-parser");

//����ejs
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
//����bodyparser����
app.use(bodyparser.urlencoded({extended:false}));
//���þ�̬ģ��·��
app.use(express.static(path.join(__dirname,"public")));

//�����ⲿconfigģ�飬����
var rout=require("./config/config")(app);

app.listen(3000,function(){
    console.log("listen 3000 success...")
})