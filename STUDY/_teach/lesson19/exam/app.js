/**
 * Created by Nan on 2016/11/23.
 */
var cluster = require('cluster');
var path = require('path');
var http = require('http');
var fs = require('fs');
var os = require('os');
var cpu = os.cpus();

var _dir = './public';
var _str = '';


var readFile = function (filename) {
    fs.readFile(filename, function (err, data) {
        worker.send(data.toString());
    });
};


var readDirectory = function (dir) {
    fs.readdir(dir, function (err, files) {
        (function eachFiles(i, length) {
            if (i < length) {
                var filename = path.join(dir, files[i]);
                fs.stat(filename, function (err, stats) {
                    if (stats.isDirectory()) {
                        readDirectory(filename);
                    } else {
                        readFile(filename);
                    }
                });
                eachFiles(++i, length);
            }
        })(0, files.length);

    });
};
if (cluster.isMaster) {
    //如果cpu核数小于2 返回
    if (cpu.length < 2) return;
    var worker = cluster.fork();
    readDirectory(_dir);
} else {
    process.on('message', function (datas) {
        _str += datas;
    });
    http.createServer(function (req, res) {
        res.end(_str);
    }).listen(8080, function () {
        console.log('listen port at 8080');
    });
}

