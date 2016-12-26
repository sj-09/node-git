/**
 * Created by Nan on 2016/11/8.
 */
var child_process = require('child_process');

//守护子进程
var fork = child_process.fork;
var server = ['server1', 'server2'];


//创建一个进程
function createWork(server) {
    //创建一个子进程
    var worker = fork(server);
    //错误次数
    var errCount = 0;
    //监听子进程推出
    worker.on('exit', function () {
        //重启子进程 errcount加一
        errCount++;
        //重启子进程达到三次，推出进程并返回
        if (errCount > 3) {
            process.exit();
        }
        //删除当前创建子进程
        delete works[worker.pid];
        //重启
        createWork(server);
    });

}

//保护子进程
function saveChildProcess() {
    //循环遍历待创建子进程的数组
    for (var i = 0; i < server.length; i++) {
        //分别创建子进程
        createWork(server[i]);
    }
}
//监听进程退出
process.on('exit', function (code) {
    //如果是正常推出，输出退出信息，并返回
    if (code) {
        console.log('closed!');
        return;
    }
    //非正常推出，给出错误提示
    process.stderr.write('错误次数达到三次，请稍后再试！');
});
saveChildProcess();