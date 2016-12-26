/**
 * Created by Nan on 2016/11/9.
 */
//创建子进程

var child_process = require('child_process');
var os = require('os');

//child_process.fork('server1.js');

var fork = child_process.fork;
var server = ['server1.js', 'server2.js'];
var counts = 0;

function createChildProcess() {
    for (var i = 0; i < server.length; i++) {
        createServer(server[i]);
    }
}
function createServer(server) {

    //console.log(server)
    var worker = fork(server);
    worker.on('exit', function () {
        counts++;
        if(counts>3){
            process.exit();
        }
        createServer(server);
    });
}


//监听进程退出
process.on('exit', function (code) {
    //如果是正常推出，输出退出信息，并返回
    if (!code) {
        console.log('closed!');
        return;
    }
    //非正常推出，给出错误提示
    process.stderr.write('错误次数达到三次，请稍后再试！');
});
createChildProcess();