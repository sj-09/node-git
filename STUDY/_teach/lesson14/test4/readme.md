1.express��ʹ��ejs
var express = require('express');//��Ҫ��װ express
var app = express();

app.set("view engine","ejs");//ģ����������Ϊ ejs

2.�ļ���֯

��express��ʹ��ejs���ļ���֯��ѭexpress��
.views-------���ö�̬ģ��
.public------���þ�̬��ҳ
.layouts-----���ò����ļ�

3.�����﷨
.<% code %>
    �޻�����������Ԫ��

.<%= code %>
    ת��HTML����code���һ��ӡ����

.<%- code %>
    ��ת���buffering����code���һ��ӡ����

.<% include file %>
    ��Ƕ����ļ�

.<% layout(file) -%>
    ָ�������ļ�

.<% script(file) -%>
    ����js�ű��ļ�

.<% stylesheet(file) -%>
    ����css�ļ�

.<% block(code, code) -%>
    ָ��������

4.��������

.scripts
    �����Ľű�

.stylesheets
    ������css

.blocks
    �����Ŀ�

5.����

//index.ejs
<% layout('boilerplate') -%>
<% script('foo.js') -%>
<% stylesheet('foo.css') -%>
<h1>I am the <%=what%> template</h1>
<% block('header', "<p>I'm in the header.</p>") -%>
<% block('footer', "<p>I'm in the footer.</p>") -%>
