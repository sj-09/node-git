/**
 * Created by Nan on 2016/11/10.
 */

//抛出一个异常
//throw new Error(String);
//try catch 只能监听同步方法

var random_Sync = function () {
    //随机输入0-100的一个数
    var num = Math.random() * 100;
    if (num > 50) {
        console.log(num);
        throw new Error('RANDOM NUMBER IS BIGGER THAN 50');
    }
    console.log(num);
};


//var random_aSync = function () {
//    //随机输入0-100的一个数
//    setTimeout(function () {
//       try{
//           var num = Math.random() * 100;
//           if (num > 50) {
//               console.log(num);
//               throw new Error('RANDOM NUMBER IS BIGGER THAN 50');
//           }
//           console.log(num);
//       }catch (e){
//           console.error('THROW ERROR IS e:' + e);
//       }
//    },0)
//};
//
//setInterval(function () {
//    try {
//        random_aSync();
//    } catch (err) {
//        console.error('THROW ERROR IS:' + err);
//    }
//}, 1000);




//uncaughtException  捕获全局异常
//监听事件
//process.on('uncaughtException', function (err) {
//    console.log('Caught exception: ' + err);
//});
var random_aSync = function () {
    //随机输入0-100的一个数
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
    try {
        random_aSync();
    } catch (err) {
        console.error('THROW ERROR IS:' + err);
    }
    random_Sync();
}, 1000);

console.log('after random_aSync');

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});



