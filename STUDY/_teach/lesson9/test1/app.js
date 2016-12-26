/**
 * Created by Nan on 2016/11/8.
 */
//process 全局对象

//process.version
//process.title
//可以通过slice()来截取
//process.argv

//console.log(process.argv);


//process.stdout 标准输出
//console.log = function (msg) {
//    process.stdout.write('this is stdout：' + msg);
//}
//console.log('你好');


////process.stdin 标准输入
//process.stdin.on('data', function (chunk) {
//    //输入流默认是暂停状态，需要手动恢复
//    process.stdin.resume();
//    //设置stdin的编码格式
//    process.stdin.setEncoding('utf8');
//    console.log(chunk.toString());
//
//    //输入结束之后，在将stdin暂停。
//    //process.stdin.pause();
//
//    //监听输入完
//    process.stdin.emit('end');
//});

//输入结束的时候
//process.stdin.on('end', function () {
//    console.log('process stdin finished!');
//});
//process.on('exit', function () {
//    console.log('退出前执行');
//});

//process.stderr
//process.stderr.write('this is stderr'+'\n');
//process.stdout.write('this is stdout');


//返回进程当前的工作目录
//process.cwd()
//__dirname 返回当前目录的路径
//__dirname

//返回用户环境的对象
//process.env


//process.config;
//返回当前运行系统的平台 eg: win32  就是windows 系统
//process.platform

//返回当前 CPU 处理器的架构：'arm'、'ia32' 或者 'x64'.
//process.arch

//内存使用情况
//process.memoryUsage()
//console.log(process.memoryUsage());


//process.nextTick(callback)


//在事件循环的下一次循环中调用 callback 回调函数
//console.log('开始');
//process.nextTick(function() {
//    console.log('nextTick 回调');
//});
//console.log('已设定');

var fun = function(){
    console.log('123123213123');
    console.log('123123213123');
    console.log('123123213123');
    console.log('123123213123');
    console.log('123123213123');
}
console.time('one');
fun();
console.timeEnd('one');


console.time('two');
process.nextTick(function () {
    console.log('123123213123');
    console.log('123123213123');
    console.log('123123213123');
    console.log('123123213123');
    console.log('123123213123');
});
console.timeEnd('two');


//util.format(1, 2, 3)