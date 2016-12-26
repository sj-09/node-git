/**
 * Module dependencies.
 */
var http = require('http');
var path = require('path');
var ejs = require('ejs');
var express = require('express');

//����һ��express��ʵ��
var app = express();
var routes = require('./routes/config')(app);

app.engine('html', ejs.__express);
//render engine,view engineĬ�ϵ���ͼ��view����������֣���������չ����
app.set('view engine', 'html');
//views��ͼ��views����ĸ�Ŀ¼��Ĭ��ָ��CWD/views
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 8080);



//����һ��
//app.get('/', function(req,res){
//    res.send('index');
//});
//��������


//д��һ��
//http.createServer(app).listen(app.get('port'), function () {
//    console.log('Express server listening on port ' + app.get('port'));
//});
//д������
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
