/**
 * Created by Nan on 2016/11/9.
 */

//Ê¹ÓÃÑ­»·Ç¶Ì×
var sum = function (num, callback) {
    var count = 0;
    var i, c;
    for (i = num; i > 0; i--) {
        for (c = num; c > 0; c--) {
            count += 1;
        }
    }
    callback(count);
};
sum(1000, function (count) {
    console.log('before hi' + count);
});
setTimeout(function () {
    console.log('hi');
}, 1000);
console.log('after hi');