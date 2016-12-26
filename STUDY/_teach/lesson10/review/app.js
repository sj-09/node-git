/**
 * Created by Nan on 2016/11/9.
 */
var cluster = require('cluster');
var child_process = require('child_process');


//主进程模块
if (cluster.isMaster) {
    var worker = cluster.fork();
    //clustter.fork().send 可以发送信息到 子进程，
    //worker.send('hello');
    //console.log(cluster.isMaster);
}
//子进程模块
else {
    //require('./master.js');

    var runnode =  child_process.spawn('node',['test.js']);
    runnode.stdout.on('data',function(){
        console.log(data);
    });
    //child_process.fork('modulePath',[..args],[..options]);
    //var workers = require('./master.js');
    //退出进程 process.exit()
    // 默认return 0 还可以传入1
    // 默认、正常退出是0
    // 异常退出是1

    var runnode =  child_process.spawn('node',['master.js']);

    runnode.stdout.on('data', function (chunk) {
        console.log(chunk.toString());
        runnode.emit(1);
    });
    runnode.on('exit', function () {
        console.log('exit finishd');
    });



    //子进程用process.on('message',fun)
    //process.on('message', function (data) {
    //    console.log(data);
    //});
}

//process.on('exit', function () {
//    console.log('process is exit');
//});
