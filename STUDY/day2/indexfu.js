
/*module.exports.one=function (){
	console.log('这是第一个文件夹')
};*/

setInterval(function(){
	process.stdout.write('\033[0f');
	//process.stdout.write('\033[2J');
	var d=new Date(),
		   h= d.getHours(),
		   m= d.getMinutes(),
		   s= d.getSeconds();

	console.log(h+":"+m+":"+s)
},1000);
