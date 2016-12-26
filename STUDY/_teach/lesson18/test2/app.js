/**
 * Created by Nan on 2016/11/19.
 */

//����expressģ��
var express = require('express');
//����bodyParserģ��
var bodyParser = require('body-parser');
//����ejsģ��
var ejs = require('ejs');
//����pathģ��
var path = require('path');
//ʵ����express����
var app = express();

//��ͼ�ļ�·��ָ��
app.set('views', path.join(__dirname, 'views'));
//ejs ģ�������ʽ
app.set('view engine', 'ejs');
//���þ�̬�ļ�����·��
app.use(express.static(path.join(__dirname, 'public')));
//����bodyParser url�����������
app.use(bodyParser.urlencoded({extended: false}));

//��������·��ģ�飬���ݵ�ǰӦ��ʵ��������app
var routes = require('./conf/config')(app);

//����8080�˿ڣ��ص������ڿ���̨�����ʾ
app.listen(8080, function () {
    console.log('listen port at 8080');
});