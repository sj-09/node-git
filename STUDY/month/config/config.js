
var mysql=require("mysql");
//链接数据库
var db=mysql.createConnection({
			host:"127.0.0.1",
			user:"root",
			password:"123",
			database:'stu',
			insecureAuth:true
	 });


module.exports=function(app){
	//设置默认页面
	app.get("/",function(req,res){

			res.render("search.ejs")
		
	});

	app.post("/login",function(req,res){
		var words=req.body.word;
		var sql="select * from sele where name like '%"+words+"%'";
		db.query(sql,function(err,rows){
			if(err){
				throw err;
			}else{
				res.send(rows)
			}	
		})
	})
};
