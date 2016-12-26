Request 对象 - request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。常见属性有：
req.app：当callback为外部文件时，用req.app访问express的实例
req.baseUrl：获取路由当前安装的URL路径
req.body / req.cookies：获得「请求主体」/ Cookies
req.fresh / req.stale：判断请求是否还「新鲜」
req.hostname / req.ip：获取主机名和IP地址
req.originalUrl：获取原始请求URL
req.params：获取路由的parameters
req.path：获取请求路径
req.protocol：获取协议类型
req.query：获取URL的查询参数串
req.route：获取当前匹配的路由
req.subdomains：获取子域名
req.accpets（）：检查请求的Accept头的请求类型
req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages
req.get（）：获取指定的HTTP请求头
req.is（）：判断请求头Content-Type的MIME类型

Response 对象 - response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。常见属性有：
res.app：同req.app一样
res.append（）：追加指定HTTP头
res.set（）在res.append（）后将重置之前设置的头
res.cookie（name，value [，option]）：设置Cookie
opition: domain / expires / httpOnly / maxAge / path / secure / signed
res.clearCookie（）：清除Cookie
res.download（）：传送指定路径的文件
res.get（）：返回指定的HTTP头
res.json（）：传送JSON响应
res.jsonp（）：传送JSONP响应
res.location（）：只设置响应的Location HTTP头，不设置状态码或者close response
res.redirect（）：设置响应的Location HTTP头，并且设置状态码302
res.send（）：传送HTTP响应
res.sendFile（path [，options] [，fn]）：传送指定路径的文件 -会自动根据文件extension设定Content-Type
res.set（）：设置HTTP头，传入object可以一次设置多个头
res.status（）：设置HTTP状态码
res.type（）：设置Content-Type的MIME类型


中间件（middleware）就是处理HTTP请求的函数



require() 用于在当前模块中加载和使用其他模块；此方法是模块的基础，使用中大概有路径的概念就行。PS：JS文件可以去掉".js"后缀
exports 表示模块的导出对象，用于导出模块的属性和公共方法。
PS：一个模块的代码只会在模块第一次被使用时执行，不会因require多次而被初始化多次。

express() 表示创建express应用程序。


app.listen() 就是在给定的主机和端口上监听请求，这个和node中http模块的http.createServer(function(){...}).listen()效果一致；
app.set(name, value)和app.get(name)就是你想的那样，set()为设置 name 的值设为 value，get()为获取设置项 name 的值。如俺app.js的图片16行中的一句“app.set('port', process.env.PORT || 3000)”就是设置项目的port，在下面使用http.createServer时就可以使用app.get('port')来获取，只是俺偷懒没用来着；
解app.engine()方法之前先看看express应用的安装命令:“express -e nodejs-product”，其中的 -e 和 -J 我们一开始已经提到，表示ejs和jade模板。
如果想把模板后缀改成“.html”时就会用到app.engine方法，来重新设置模板文件的扩展名，比如想用ejs模板引擎来处理“.html”后缀的文件：app.engine('.html', require('ejs').__express);
app.engine(ext, callback) 注册模板引擎的 callback 用来处理ext扩展名的文件。
PS：__express不用去care，其实就是ejs模块的一个公共属性，表示要渲染的文件扩展名。

app.use([path], function) 使用中间件 function,可选参数path默认为"/"。使用 app.use() “定义的”中间件的顺序非常重要，它们将会顺序执行，use的先后顺序决定了中间件的优先级(经常有搞错顺序的时候);

最后介绍个很有用的express API：
app.render(view, [options], callback) 渲染 view, callback 用来处理返回的渲染后的字符串