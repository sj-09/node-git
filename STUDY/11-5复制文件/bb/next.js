/**
 * Created by sunjian on 2016/11/6.
 */

//�����ļ����������ļ�

var fs=require("fs");
var path=require("path");


//Դ�ļ���·��
var source_dir = "./js";
//Ŀ���ļ���·��
var target_dir = "./js_copy";

/*�����ļ�Ŀ¼
 * dir Ŀ��·��
 * floder ���ļ�������
 * callback �ص�����
 * �����ļ�����
 * ����
 */
var setDirectory = function (dir, floder, callback, file, datas) {

    //�ж��費��Ҫ������Ŀ¼ null ��������Ŀ¼�� ����ƴ����Ŀ¼��·��
    var _dir = floder == null ? dir : path.join(dir, floder);
    fs.exists(_dir, function (exists) {
        //���Ŀ¼����
        if (exists) {
            //ִ�лص�����д���ȡ�������ļ�
            callback(_dir, file, datas);
            return true;
        } else {
            //���Ŀ¼�����ڣ�����Ŀ¼��������ɺ�ִ�лص�����
            fs.mkdir(_dir, function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    callback(_dir, file, datas);
                    console.log('floder create success!');
                }
            });
        }
    });
};

/*д���ļ�
 * dir Ŀ���ļ�·��
 * filename Ŀ���ļ�����
 * data ����
 */
var writeFile = function (dir, filename, data) {

    fs.writeFile(path.join(dir, filename), data, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("wirte done");
    });
};
//��ȡ�ļ�
var readFile = function (readPath, name) {
    fs.readdir(readPath, function (err, files) {
        if (err) {
            return console.error(err);
        }
        //����Ŀ¼
        files.forEach(function (filename) {
            //�ж��ļ�����
            fs.stat(path.join(readPath, filename), function (err, stats) {
                if (err) {
                    return console.error(err);
                }
                //������ļ�
                if (stats.isFile()) {
                    //��ȡ�ļ����ݣ�д���ļ�
                    fs.readFile(path.join(readPath, filename), function (err, data) {
                        if (err) {
                            console.log(err);
                        }
                        //�����ļ�Ŀ¼
                        setDirectory(target_dir, name, writeFile, filename, data);
                    });
                }
                //������ļ��У����ú�����������Ŀ¼
                else if (stats.isDirectory()) {
                    //readFile(path.join(sourceDir, filename), name + '/' + filename);
                    readFile(path.join(sourceDir, filename), filename);
                }
            });
        });
    });
};
//��ȡ�ļ�Ŀ¼
var readdir = function (sourceDir) {

    //��ȡ�ļ����ڵ��ļ�
    fs.readdir(sourceDir, function (err, files) {

        //ѭ�������ļ����ڵ�ÿ���ļ�����
        files.forEach(function (file) {
            //�ж��ļ�����
            fs.stat(path.join(sourceDir, file), function (error, stats) {
                if (err) {
                    return console.error(err);
                }
                //������ļ�
                if (stats.isFile()) {
                    //��ȡ�ļ����ݣ�д���ļ�
                    fs.readFile(path.join(sourceDir, file), function (err, data) {
                        if (err) {
                            console.log(err);
                        }
                        //�����ļ�Ŀ¼
                        setDirectory(target_dir, null, writeFile, file, data);
                    });
                }
                //������ļ��У����ú�����������Ŀ¼
                else if (stats.isDirectory()) {
                    readFile(path.join(sourceDir, file), file);
                }
            });

        });
    });
};

readdir(source_dir);