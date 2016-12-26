1.express中使用ejs
var express = require('express');//需要安装 express
var app = express();

app.set("view engine","ejs");//模版引擎设置为 ejs

2.文件组织

在express中使用ejs，文件组织遵循express。
.views-------放置动态模版
.public------放置静态网页
.layouts-----放置布局文件

3.基本语法
.<% code %>
    无缓冲的条件语句元素

.<%= code %>
    转义HTML，该code并且会打印出来

.<%- code %>
    非转义的buffering，该code并且会打印出来

.<% include file %>
    内嵌别的文件

.<% layout(file) -%>
    指定布局文件

.<% script(file) -%>
    包含js脚本文件

.<% stylesheet(file) -%>
    包含css文件

.<% block(code, code) -%>
    指定块内容

4.基本对象

.scripts
    包含的脚本

.stylesheets
    包含的css

.blocks
    包含的块

5.例子

//index.ejs
<% layout('boilerplate') -%>
<% script('foo.js') -%>
<% stylesheet('foo.css') -%>
<h1>I am the <%=what%> template</h1>
<% block('header', "<p>I'm in the header.</p>") -%>
<% block('footer', "<p>I'm in the footer.</p>") -%>
