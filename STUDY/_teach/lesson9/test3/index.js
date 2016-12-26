/**
 * Created by Nan on 2016/11/7.
 */

//多进程模块 cluster
var cluster = require('cluster');
var os = require('os');

//console.log(cluster.worker);
//得到系统的线程数
//os.cpus().length

//返回一个布尔值，判断是不是主进程
//cluster.isMaster
//cluster.isWorker


if (cluster.isMaster) {
    //console.log('isMaster');
    var worker = cluster.fork();
    worker.send('child_process');

} else if (cluster.isWorker) {

    process.on('message', function (msg) {
        //console.log('this is worker' + msg);
        console.log(msg);
    });
	process.exit();
}

process.on('exit',function(code){
    console.log(111);
})