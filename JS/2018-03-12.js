// console.time('mark')
// // var ar = [1,1,3,4,5,6,7,8,9,10];

// // var t = Math.random() * 10;
// // t = parseInt(t);
// // console.log(t);

// var ar = [];
// // x = +process.argv[2];
// x = Math.random() * 1000;

// for (var i = 0; i < x; i++) {
// 	ar[i] = parseInt(Math.random() * 1000);
// }

// console.log(ar);

// var k =ar.length;
// while(k--){
// 	var j = ar.length;
// 	while(j--) {
// 		if (ar[j] > ar[j+1]) {
// 			ar[j] = ar[j] + ar[j+1];
// 			ar[j+1] = ar[j] - ar[j+1];
// 			ar[j] = ar[j] - ar[j+1];	
// 		}
// 	}
// }
// // for (var k = 0; k < ar.length; k++) {
// // 	for (var j = 0; j < ar.length; j++) {
// // 		if (ar[j] > ar[j+1]) {
// // 			ar[j] = ar[j] + ar[j+1];
// // 			ar[j+1] = ar[j] - ar[j+1];
// // 			ar[j] = ar[j] - ar[j+1];	
// // 		}
// // 	}
// // }
// console.log(ar);
// console.log("########################");
// console.log(ar.length);
// console.timeEnd('mark')

// function fcn() {
// 	console.log("Hello function")
// }

// // fcn();

// console.log(fcn())

// function log(message) {
// 	console.log(message);
// }
//  function rand(min, max) {
//  	var res = min + Math.random() * (max - min);
//  	return res;
//  }

// var x = parseInt(rand(-10, 100));
// console.log(x);

// var x = +process.argv[2];

// function fcn(x) {
// 	var mes;
// 	if (isNaN(x)) {
// 		mes = "не число"
// 	} else if (x === 0) {
// 		mes = "введен 0"
// 	} else if (x % 2 == 0) {
// 		mes = "чет"
// 	} else {
// 		mes = "не чет"
// 	}
// 	return mes;
// }

// console.log(fcn(x));

// const PI = 3.14;
// PI = 1; //не даст переопределить константу
// console.log(PI)

// let pi = 3.14;
// pi = 1;
// console.log(pi)

// function pow(a, b) {
// 	var mes = a;
// 	for (var i = 1; i < b; i++) {
// 		mes*= a;
// 	}
// 	return mes;
// }

// console.log(pow(3, 3));