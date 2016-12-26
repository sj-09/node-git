var fs = require('fs');
var path = require('path');

//获取当前文件目录
// __dirname
// console.log(__dirname);

//获取当前文件
// __filename
// console.log(__filename);


//格式化路径
//语法：path.normalize(p)
var path_illegal = '/test/test1//2slashes/1slash/tab/..';
var myPath = path.normalize(__dirname + '/test/a//b//../c/memeda.mp3');
var illegal_path = path.normalize(path_illegal);

//路径合并 
//语法：path.join([path1], [path2], […])
var join_path = path.join(__dirname, 'content','img');



//获取绝对路径


//获取绝对路径
//语法: path.resolve(path1, [path2]..[pathn]);
//以应用程序为起点，根据参数字符串解析出一个绝对路径
// path 必须至少一个路径字符串值
// [pathn] 可选路径字符串

// 参数为空，获得当前目录的路径
var relative_path = path.resolve();
// __dirname;

// 获得一个路径拼接
var myPath = path.resolve('path1', 'path2', 'a/b\\c/');

//获得当前文件的路径
var res_path = path.resolve('main.js');



// 获取相对路径 
// 语法：path.relative(from, to)
// 返回某个路径下相对于另一个路径的相对位置串

var from = 'c:\\from\\a\\',
    to = 'c:/test/b';
var _path = path.relative(from, to);



// 判断是否绝对路径
// path.isAbsolute(path)
var isAbsolute_path = path.dirname('NodeJs\lesson6\test1');





// 获取目录名
// 语法：path.dirname(p)
// var myPath = path.dirname(__dirname + '/img/1.jpg');


// 获取路径中的扩展名，如果没有. 返回空
// path.extname(p)
var myPath = path.extname(__dirname+'img/1.jpg');



var extname_path = path.dirname('index.js');

// 返回路径字符串的对象
// path.parse(pathString)

// 从对象中返回路径字符串，和 path.parse 相反。
// path.format(pathObject)
// path.sep属性
// 返回操作系统中文件分隔符； window是'\\', Unix是'/'

// path.delimiter属性
// 返回操作系统中目录分隔符，如window是';', Unix中是':'

// 返回路径中的文件名，后缀名可选，'.ext'
// path.basename(path, [ext])
var basename_path = path.basename(__dirname+'img/3.mp3','.mp3');













