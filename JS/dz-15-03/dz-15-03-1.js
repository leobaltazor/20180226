 //генерация случайного числа от min до max
 function rand(min, max) {
 	var res = min + Math.random() * (max - min);
 	return parseInt(res);
 }

 console.log(rand(-10, 10));
 
 function arr_rand(a,b) {
	 var len = 0;
	 v = (a < 0) ? a * -1 : a * 1;
	 z = (b < 0) ? b * -1 : b * 1;
	 len = v + z;
	 let arr = [];
	 for (let i = 0; i < len; i++) {
		 arr[i] = rand(a,b);
	 }
	 return arr;
 }

 console.log(arr_rand(3,1));
 console.log(arr_rand(1,3));