var fs = require('fs');
var path = require('path');

//��ȡ��ǰ�ļ�Ŀ¼
// __dirname
// console.log(__dirname);

//��ȡ��ǰ�ļ�
// __filename
// console.log(__filename);


//��ʽ��·��
//�﷨��path.normalize(p)
var path_illegal = '/test/test1//2slashes/1slash/tab/..';
var myPath = path.normalize(__dirname + '/test/a//b//../c/memeda.mp3');
var illegal_path = path.normalize(path_illegal);

//·���ϲ� 
//�﷨��path.join([path1], [path2], [��])
var join_path = path.join(__dirname, 'content','img');



//��ȡ����·��


//��ȡ����·��
//�﷨: path.resolve(path1, [path2]..[pathn]);
//��Ӧ�ó���Ϊ��㣬���ݲ����ַ���������һ������·��
// path ��������һ��·���ַ���ֵ
// [pathn] ��ѡ·���ַ���

// ����Ϊ�գ���õ�ǰĿ¼��·��
var relative_path = path.resolve();
// __dirname;

// ���һ��·��ƴ��
var myPath = path.resolve('path1', 'path2', 'a/b\\c/');

//��õ�ǰ�ļ���·��
var res_path = path.resolve('main.js');



// ��ȡ���·�� 
// �﷨��path.relative(from, to)
// ����ĳ��·�����������һ��·�������λ�ô�

var from = 'c:\\from\\a\\',
    to = 'c:/test/b';
var _path = path.relative(from, to);



// �ж��Ƿ����·��
// path.isAbsolute(path)
var isAbsolute_path = path.dirname('NodeJs\lesson6\test1');





// ��ȡĿ¼��
// �﷨��path.dirname(p)
// var myPath = path.dirname(__dirname + '/img/1.jpg');


// ��ȡ·���е���չ�������û��. ���ؿ�
// path.extname(p)
var myPath = path.extname(__dirname+'img/1.jpg');



var extname_path = path.dirname('index.js');

// ����·���ַ����Ķ���
// path.parse(pathString)

// �Ӷ����з���·���ַ������� path.parse �෴��
// path.format(pathObject)
// path.sep����
// ���ز���ϵͳ���ļ��ָ����� window��'\\', Unix��'/'

// path.delimiter����
// ���ز���ϵͳ��Ŀ¼�ָ�������window��';', Unix����':'

// ����·���е��ļ�������׺����ѡ��'.ext'
// path.basename(path, [ext])
var basename_path = path.basename(__dirname+'img/3.mp3','.mp3');













