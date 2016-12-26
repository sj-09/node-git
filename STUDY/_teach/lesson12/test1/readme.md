Request ���� - request �����ʾ HTTP ���󣬰����������ѯ�ַ��������������ݣ�HTTP ͷ�������ԡ����������У�
req.app����callbackΪ�ⲿ�ļ�ʱ����req.app����express��ʵ��
req.baseUrl����ȡ·�ɵ�ǰ��װ��URL·��
req.body / req.cookies����á��������塹/ Cookies
req.fresh / req.stale���ж������Ƿ񻹡����ʡ�
req.hostname / req.ip����ȡ��������IP��ַ
req.originalUrl����ȡԭʼ����URL
req.params����ȡ·�ɵ�parameters
req.path����ȡ����·��
req.protocol����ȡЭ������
req.query����ȡURL�Ĳ�ѯ������
req.route����ȡ��ǰƥ���·��
req.subdomains����ȡ������
req.accpets��������������Acceptͷ����������
req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages
req.get��������ȡָ����HTTP����ͷ
req.is�������ж�����ͷContent-Type��MIME����

Response ���� - response �����ʾ HTTP ��Ӧ�����ڽ��յ�����ʱ��ͻ��˷��͵� HTTP ��Ӧ���ݡ����������У�
res.app��ͬreq.appһ��
res.append������׷��ָ��HTTPͷ
res.set������res.append����������֮ǰ���õ�ͷ
res.cookie��name��value [��option]��������Cookie
opition: domain / expires / httpOnly / maxAge / path / secure / signed
res.clearCookie���������Cookie
res.download����������ָ��·�����ļ�
res.get����������ָ����HTTPͷ
res.json����������JSON��Ӧ
res.jsonp����������JSONP��Ӧ
res.location������ֻ������Ӧ��Location HTTPͷ��������״̬�����close response
res.redirect������������Ӧ��Location HTTPͷ����������״̬��302
res.send����������HTTP��Ӧ
res.sendFile��path [��options] [��fn]��������ָ��·�����ļ� -���Զ������ļ�extension�趨Content-Type
res.set����������HTTPͷ������object����һ�����ö��ͷ
res.status����������HTTP״̬��
res.type����������Content-Type��MIME����


�м����middleware�����Ǵ���HTTP����ĺ���



require() �����ڵ�ǰģ���м��غ�ʹ������ģ�飻�˷�����ģ��Ļ�����ʹ���д����·���ĸ�����С�PS��JS�ļ�����ȥ��".js"��׺
exports ��ʾģ��ĵ����������ڵ���ģ������Ժ͹���������
PS��һ��ģ��Ĵ���ֻ����ģ���һ�α�ʹ��ʱִ�У�������require��ζ�����ʼ����Ρ�

express() ��ʾ����expressӦ�ó���


app.listen() �����ڸ����������Ͷ˿��ϼ������������node��httpģ���http.createServer(function(){...}).listen()Ч��һ�£�
app.set(name, value)��app.get(name)���������������set()Ϊ���� name ��ֵ��Ϊ value��get()Ϊ��ȡ������ name ��ֵ���簳app.js��ͼƬ16���е�һ�䡰app.set('port', process.env.PORT || 3000)������������Ŀ��port��������ʹ��http.createServerʱ�Ϳ���ʹ��app.get('port')����ȡ��ֻ�ǰ�͵��û�����ţ�
��app.engine()����֮ǰ�ȿ���expressӦ�õİ�װ����:��express -e nodejs-product�������е� -e �� -J ����һ��ʼ�Ѿ��ᵽ����ʾejs��jadeģ�塣
������ģ���׺�ĳɡ�.html��ʱ�ͻ��õ�app.engine����������������ģ���ļ�����չ������������ejsģ������������.html����׺���ļ���app.engine('.html', require('ejs').__express);
app.engine(ext, callback) ע��ģ������� callback ��������ext��չ�����ļ���
PS��__express����ȥcare����ʵ����ejsģ���һ���������ԣ���ʾҪ��Ⱦ���ļ���չ����

app.use([path], function) ʹ���м�� function,��ѡ����pathĬ��Ϊ"/"��ʹ�� app.use() ������ġ��м����˳��ǳ���Ҫ�����ǽ���˳��ִ�У�use���Ⱥ�˳��������м�������ȼ�(�����и��˳���ʱ��);

�����ܸ������õ�express API��
app.render(view, [options], callback) ��Ⱦ view, callback ���������ص���Ⱦ����ַ���