/**
 * Created by Nan on 2016/11/9.
 */
var domain = require('domain');
var events = require('events').EventEmitter;

var oEventEmitter = events.EventEmitter;
var oEvents = new oEventEmitter();
var oDomain = domain.create();


var sendEmit = setTimeout(function () {
    oEvents.emit('ErrInfo')
}, 10);


var listenError = function () {
    oEvents.on('ErrInfo', function () {
        throw new Error('output Error msg');
    });
};

//Å×³ö´íÎó×è¶Ï²Ù×÷
//listenError();

oDomain.add(sendEmit);
oDomain.run(listenError);
oDomain.on('error', function (err) {
    console.error(err);
});