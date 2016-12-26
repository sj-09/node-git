/**
 * Created by Nan on 2016/11/10.
 */
var express = require('express');
var app = express();

//  ��ҳ��� "Hello World"
app.get('/', function (req, res) {
    console.log("��ҳ GET ����");
    res.send('Hello GET');
})


//  POST ����
app.post('/', function (req, res) {
    console.log("��ҳ POST ����");
    res.send('Hello POST');
})

//  /del_user ҳ����Ӧ
app.get('/del_user', function (req, res) {
    console.log("/del_user ��Ӧ DELETE ����");
    res.send('ɾ��ҳ��');
})

//  /list_user ҳ�� GET ����
app.get('/list_user', function (req, res) {
    console.log("/list_user GET ����");
    res.send('�û��б�ҳ��');
})

// ��ҳ�� abcd, abxcd, ab123cd, ����Ӧ GET ����
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET ����");
    res.send('����ƥ��');
})


var server = app.listen(8080, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("Ӧ��ʵ�������ʵ�ַΪ http://%s:%s", host, port)

})