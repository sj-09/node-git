/**
 * Created by Nan on 2016/11/9.
 */

//抛出一个异常
//throw new Error(String);
// try{} catch(e){}
var sum = function (num, callback) {
    var count = 0;
    var i, c;
    for (i = num; i > 0; i--) {
        for (c = num; c > 0; c--) {

            if (count >= 1000) {
                //console.log(count);
                throw new Error('count is bigger than 1000');
            }
            count += 1;
        }
    }
    callback(count);
};
//sum(1000, function (count) {
//    console.log(count);
//});

try {
    sum(1000, function (count) {
        console.log(count);
    });
} catch (err) {
    console.log('error message is:' + err);
}