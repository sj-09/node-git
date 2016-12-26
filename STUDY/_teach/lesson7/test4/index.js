var http = require("http");
var url = require("url");
var queryString = require('querystring');



// var server = http.createServer(function(req,res){
	// var str = url.parse(req.url).query;
	// var strPath = url.parse(req.url).path;
	// console.log(strPath);
	// res.writeHead(200,{'Content-Type':'text/html;charset="utf8"'});
	// res.write('hello');
	// res.end();
// });

// server.listen(3000,function(){
	// console.log('http server listen at port 3000');
// });

//将URL字符串转换为对象：
// url.parse(urlStr[, parseQueryString][,slashesDenoteHost])
var url_path = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';
var url_parse = url.parse(url_path);
console.log(url_parse);


//将对象格式化为URL字符串：
// url.format(urlObj)

/* var urlObj = {
     protocol: 'http:',//草案协议
     slashes: true,
     hostname: 'itbilu.com', //主机名
     port: 80,
     hash: '#hash',
     search: '?query=string',
     query: '?name="haonan"&password=123',
     path: '/nodejs?query=string',
	 herf:'http://localhost:8888/index.html?name="haonan"&password=123'
 };
 var url_format = url.format(urlObj);
 console.log(url_format);*/


//URL路径处理
// url.resolve(from, to)
//用于处理URL路径，也可以用于处理锚点

var url_resolve1 = url.resolve('/one/two/three', 'four');
var url_resolve2 = url.resolve('http://example.com/', '/one');
var url_resolve3 = url.resolve('http://example.com/one', '/two');
//console.log(url_resolve1);
//console.log(url_resolve2);
//console.log(url_resolve3);




//queryString 模块
//查询字符串主要由两个方法和内置格式化方法组成，
// 一个是将对象转换为字符串，一个则是相反，将字符串转换为对象


//querystring.stringify(obj, [sep], [eq])
//将JSON对象格式化为查询字符串格式的字符串，默认的分隔符为：“&”和“=”

var url_stringify = queryString.stringify({foo: 'bar', baz: 'qux'}, ';', ':');
//console.log(url_stringify);

//querystring.parse(str, [sep], [eq], [options])
//根据“&”和“=”将字符串进行分割，反序列化为JSON对象，而options包含的maxKeys默认设置为1000，如果将其设置为0则表示没这个限制


var url_querystring = queryString.parse('foo=bar&baz=qux&baz=quux&baz=quu&corge');
//console.log(url_querystring);


//querystring.escape，querystring.unescape