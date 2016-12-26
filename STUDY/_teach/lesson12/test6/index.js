/**
 * Created by Nan on 2016/11/10.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// ���� application/x-www-form-urlencoded �������
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
    res.sendFile(__dirname + "/" + "index.htm");
});

app.post('/process_post', urlencodedParser, function (req, res) {
    // ��� JSON ��ʽ
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Ӧ��ʵ�������ʵ�ַΪ http://%s:%s", host, port)

});