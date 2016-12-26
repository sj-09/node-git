/**
 * Created by Nan on 2016/11/19.
 */
//外置路由模块
//抛出路由模块
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/index');
    });
    app.get('/index', function (req, res) {
        res.render('index');
    });

    app.get('/login', function (req, res) {
        res.render('login');
    });

    app.get('/list', function (req, res) {
        res.render('list');
    });

    app.get('/about', function (req, res) {
        res.render('about');
    });
    //定义登录接口
    app.post('/login', function (req, res) {
        //通过bodyParser第三方中间件获取 form表单传递的 username
        var username = req.body.username;
        //通过bodyParser第三方中间件获取 form表单传递的 password
        var password = req.body.password;
        //判断用户名为'bawei',密码为'123456' 跳转到主页，否则重新定向到登录页面
        if (username == 'bawei' && password == '123456') {
            res.redirect('index');
        } else {
            res.redirect('login');
        }
    })
};