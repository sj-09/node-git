/**
 * Created by Nan on 2016/11/9.
 */

//阻塞操作
//异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了
function sum(num) {
    var count = 0,
        i, c;

    for (i = num; i > 0; --i) {
        for (c = num; c > 0; --c) {
            count += 1;
        }
    }
}
console.log('开始');
var t = new Date();


sum(10000);
setTimeout(function () {
    console.log(new Date() - t);
}, 10);
console.log(new Date() - t);
console.log('结束');