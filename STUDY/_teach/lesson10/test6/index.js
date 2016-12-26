/**
 * Created by Nan on 2016/11/9.
 */
var cluster = require('cluster');
var child_process = require('child_process');

if (cluster.isMaster) {
    cluster.fork();
}
else {
    //方法一：
    // 通过 require 一个模块指向创建的子进程
    //require('./master.js');
    //方法二：
    //通过 child_process.spawn()来创建一个子进程

    var worker = child_process.spawn('node', ['master.js']);
    //监听创建的子进程读取的数据，并打印出来
    worker.stdout.on('data', function (data) {
        console.log(data.toString());
        //输出完成结束
        //worker.stdout.emit('end');
        worker.stdout.end();
        return;
    });
    //监听输出完成后的回调函数
    worker.stdout.on('end', function () {
        console.log('finished!');
        //关闭进程
        process.exit();
        return;
    });

}

//监听关闭进程的回调函数
process.on('exit', function (data) {
    console.log('process is exited');

});