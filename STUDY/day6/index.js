var path=require("path");

//获取绝对路径
//1、参数为空，获取到当前的文件目录
//var resolve=path.resolve()
//2、以应用程序为起点
//var resolve=path.resolve("aa.bb.cc.dd\\as.ad//asd")
//console.log(resolve)

//获取相对路径
//返回某个路径下相对另一个路径的相对字符串
/*var form='c:/user';
var to='c:/user/kk/l'
var relative=path.relative(form,to)
console.log(relative)*/

//格式化路径
var nor=path.normalize("d:NodeJS/STUDY/day6/////////////index")
console.log(nor)