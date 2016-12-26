/**
 * Created by Nan on 2016/11/10.
 */


//Domain(域) 封装了将错误和没有被捕捉的异常导向到有效对象的功能
//Domain是 EventEmitter类的一个子类。监听它的error事件来处理它捕捉到的错误
//add()
//run()
//create()  返回一个新的Domain对象

//var d = domain.create();
//d.on('error', function(er) {
//    console.error('Caught error!', er);
//});
//d.run(function() {
//    process.nextTick(function() {
//        setTimeout(function() { // 模拟几个不同的异步的东西
//            fs.open('non-existent file', 'r', function(er, fd) {
//                if (er) throw er;
//                // 继续。。。
//            });
//        }, 100);
//    });
//});


var Domain = require('domain').create();

var random_aSync = function () {
    setTimeout(function () {
        var num = Math.random() * 100;
        if (num > 50) {
            console.log(num);
            throw new Error('RANDOM NUMBER IS BIGGER THAN 50');
        }
        console.log(num);
    }, 0)
};
console.log('before random_aSync');
setInterval(function () {
    Domain.run(random_aSync);
}, 1000);
console.log('after random_aSync');

Domain.on('error', function(er) {
    console.error('Caught error!', er);
});