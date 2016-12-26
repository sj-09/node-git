/**
 * Created by Nan on 2016/11/6.
 */
var http = require('http');
exports.sendEmail = function (req, res) {
    res.send(200, req.body.address);
}


var sendEmail = function (req, res) {

    var data = {
        address: 'test@test.com',
        subject: "test"
    };

    data = require('querystring').stringify(data);
    console.log(data);
    var opt = {
        method: "POST",
        host: "localhost",
        port: 8080,
        path: "/v1/sendEmail",
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded',
            "Content-Length": data.length
        }
    };

    var req = http.request(opt, function (serverFeedback) {
        if (serverFeedback.statusCode == 200) {
            var body = "";
            serverFeedback.on('data', function (data) { body += data; })
                .on('end', function () { res.send(200, body); });
        }
        else {
            res.send(500, "error");
        }
    });
    req.write(data + "\n");
    req.end();
}