/**
 * Created by Nan on 2016/10/20.
 */

var express = require('express');
//var Hello  = require('./moudle');
var api = require('./routes/api');


var app = express();

app.get('/api', api.index);
// �趨port��������Ϊ���ʶ˿�
//app.set('port', process.env.PORT || 8000);
// �趨views��������Ϊ��ͼ��ŵ�Ŀ¼
//app.set('views', path.join(__dirname, 'views'));
// �趨view engine��������Ϊ��ҳģ������
app.set('view engine', 'jade');

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    //var hello = new Hello ();
    var body = 'hello world';
    //hello.setName('haonan');
    //hello.sayHello();
    res.setHeader('Content-Type', 'text/plain');
    //res.send('hello world');

    res.end(body);
});

app.listen(8000);
console.log("Server runing at port 3000");