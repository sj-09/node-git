var val = function(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * val(n - 1);
    }
}


var val1= function(){
	var arr = [1,2,3,4,5]
	for (var i=0;i<arr.length;i++){
		console.log(arr[i])	;
	}
}

var val2= function(){
	var arr = [1,2,3,4,5]

	for(i in arr){
		console.log(arr[i])	;
	}
}

val2();