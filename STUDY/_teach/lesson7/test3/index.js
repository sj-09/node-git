var http = require('http');
var fs = require('fs');
var path = require('path');



var http = http.createServer(function (request, response) {

    var url_path;
    var _CONTENTTYPE = contentType();
    if (request.url == '/' || request.url == '/index.html' || request.url == '/index') {
        url_path = './index.html';
    } else {
        url_path = path.join('./views', request.url);
    }

    fs.readFile(url_path, function (err, page) {
    //fs.readFile(path.join('./views', request.url), function (err, page) {
        if (err) {
            return console.error(err);
        }
        response.writeHead(200, {'Content-Type': _CONTENTTYPE});
        //response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
        response.write(page);
        response.end();
    });

});

var contentType = function (extname) {
    switch (extname) {
        case '.html':
            return 'text/html;charset="utf-8"';
            break;
        case '.png':
            return 'text/html';
            break;
        case '.jpg':
            return 'text/html';
            break;
    }
};
http.listen(3000, function () {
    console.log("listen 3000 port");
});