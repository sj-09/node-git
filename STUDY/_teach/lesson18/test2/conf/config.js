/**
 * Created by Nan on 2016/11/19.
 */
//����·��ģ��
//�׳�·��ģ��
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
    //�����¼�ӿ�
    app.post('/login', function (req, res) {
        //ͨ��bodyParser�������м����ȡ form�����ݵ� username
        var username = req.body.username;
        //ͨ��bodyParser�������м����ȡ form�����ݵ� password
        var password = req.body.password;
        //�ж��û���Ϊ'bawei',����Ϊ'123456' ��ת����ҳ���������¶��򵽵�¼ҳ��
        if (username == 'bawei' && password == '123456') {
            res.redirect('index');
        } else {
            res.redirect('login');
        }
    })
};