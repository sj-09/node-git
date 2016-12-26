var arr=[]
arr[arr.length]=`
*
*
*
*
*
*`;
arr[arr.length]=`
***********
          *
          *
***********
*
*
**********`;
var i=0;
var timer = setInterval(function(){
	process.stdout.write('\033[0f');
	process.stdout.write('\033[2J');
	console.log(arr[i]);
	i++;
	if(i==arr.length) i=0;
},1000);