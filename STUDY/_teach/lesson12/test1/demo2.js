/**
 * Created by Nan on 2016/11/10.
 */
var express = require('express');
var app = express();

//���ʾ�̬�ļ�
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Ӧ��ʵ�������ʵ�ַΪ http://%s:%s", host, port)
});
