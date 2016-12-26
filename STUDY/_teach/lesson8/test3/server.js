var fs = require('fs');
var http = require('http');
var zlib = require('zlib');

http.createServer(function(req, res) {
    var file = fs.createReadStream('./readme.txt');
    var acceptEncoding = req.headers['accept-encoding'];
    console.log(req.headers);

    if(acceptEncoding && acceptEncoding.indexOf('gzip') != -1) {
        var gzipStream = zlib.createGzip();
        // 设置返回头content-encoding为gzip
        res.writeHead(200, {
            "content-encoding": "gzip"
        });
        //压缩或解压缩一个文件可以通过导流一个 fs.ReadStream 到一个 zlib 流，然后到一个 fs.WriteStream 来完成。
        file.pipe(gzipStream).pipe(res);
    } else {
        res.writeHead(200);
        res.end();
        // 不压缩
        file.pipe(res);
    }
}).listen(8888,function(){
    console.log('8888 port');
});

//创建Gzip压缩
//var gZip = zlib.createGzip();
//var sourfile = fs.createReadStream('./readme.txt');
//var targfile = fs.createWriteStream('./readme.txt.gz');
//sourfile.pipe(gZip).pipe(targfile);

//var _data = "hello world";
//zlib.deflate( _data, function (err, buffer) {
//    if (!err) {
//        console.log('deflate',buffer.toString('base64'));
//    }
//});
//
//var _dataDeflate = 'eJzLSM3JyVcozy/KSQEAGgsEXQ==';
//var buffer = new Buffer(_dataDeflate,'base64');
////console.log("new buffer",buffer);
//zlib.unzip(buffer, function (err,buffer) {
//    if (!err) {
//        console.log(buffer.toString());
//    }
//});