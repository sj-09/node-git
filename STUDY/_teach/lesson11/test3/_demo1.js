/**
 * Created by Nan on 2016/11/9.
 */
//JS自身提供的异常捕获和处理机制——try..catch..只能用于同步执行的代码


//process.uncaughtException
//捕获全局异常
//process.on('uncaughtException', function (err) {
//    console.log('Error: %s', err.message);
//});

//var sum = function (num, callback) {
//    var count = 0;
//    var i, c;
//    for (i = num; i > 0; i--) {
//        for (c = num; c > 0; c--) {
//            if (count >= 1000) {
//                console.log(count);
//                throw new Error('count is bigger than 1000');
//            }
//            count += 1;
//        }
//    }
//    callback(count);
//};
//sum(1000, function (count) {
//    console.log(count);
//});



var random_Sync = function () {
    var num = Math.random() * 100;
    if (num > 50) {
        console.log('random num:' + num);
        throw new Error('random number is bigger than 50');
    }
    console.log('random num:' + num);
};

var random_aSync = function () {
    setTimeout(function () {
        var num = Math.random() * 100;
        console.log('random num:' + num);
        if (num > 50) {

            throw new Error('random number is bigger than 50');
        }
        console.log('random num:' + num);
    }, 0);
};

//var random_aSync = function () {
//    setTimeout(function () {
//        try {
//            var num = Math.random() * 100;
//            console.log('random num:' + num);
//            if (num > 50) {
//
//                throw new Error('random number is bigger than 50');
//            }
//            console.log('random num:' + num);
//        } catch (err) {
//            if (err) {
//                console.log('Error: %s', err.message);
//            }
//        }
//    }, 0);
//};

setInterval(function () {
    //try {
    //    random_Sync();
    //} catch (err) {
    //    console.log(err);
    //}
    random_aSync();
    process.on('uncaughtException', function (err) {
        console.log(err);
    });
}, 500);

