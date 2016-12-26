/**
 * Created by Nan on 2016/11/8.
 */
var cluster = require('cluster');
var child_process = require('child_process');
var os = require('os');


var server = ['server1', 'server2'];

var works = [];
var cpus = os.cpus();

if (cluster.isMaster) {

    var errCount = 0;
    //for (var i = 0; i < cpus.length; i++) {
    //  cluster.fork();
    //}
    cluster.fork();
    cluster.on('exit', function () {

        errCount++;
        //重启子进程达到三次，推出进程并返回
        if (errCount > 3) {
            process.exit();
        }
        cluster.fork();
    });
} else {
    require('./server.js')

}

process.on('exit', function () {
    console.log('stop the process');
});

//监听进程退出
process.on('exit', function (code) {
    process.stderr.write('\n错误次数达到三次，请稍后再试！\n');
    //console.log('\n错误次数达到三次，请稍后再试！\n');
});