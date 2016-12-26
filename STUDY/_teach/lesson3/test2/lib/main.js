var student = require('./student');
var teacher = require('./teacher');
var createClass = function(tch,stu){
	return {
		teacher:teacher.create(tch),
		student:student.create(stu)
	}
}
// console.log( createClass("haonan","guofangfang"));
module.exports.createClass = createClass("haonan","guofangfang");