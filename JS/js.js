// var x = process.argv[2];
// var name = "_";
// var p = 0;

// for (var k = 0; k < x; k++) {
// 	if (p == 0) {
// 				for (var i = 0; i < x; i++) {
// 					name = name + "x";
// 					name = name + "_";	
// 					}
// 					p = 1;	
// 		} else {
// 				for (var i = 0; i < x; i++) {
// 					name = name + "_";
// 					name = name + "X";
// 					}
// 			p = 0;
// 	}

// 	console.log(name);	
// 	name = "X";
// 	if (p === 0) {
// 		p = 1;
// 	} else {
// 		p = 0;
// 	};
// 	console.log(p);
// }

// var len = +process.argv[2];

// var str1 = "", str2 = "", char1, char2;

// for(var i = 0; i < len; i++){
//    if(i % 2 == 0){
//        char1 = "#";
//        char2 = "_"
//    } else {
//        char1 = "_";
//        char2 = "#";
//    }
//    str1  = str1 + char1;
//    str2  = str2 + char2;
// }

// var login = process.argv[2];
// switch (login)
// {
// 	case "admin":
// 		console.log('is admin');
// 		break;
// 	case "user":
// 		console.log('is user');
// 		break;
// 	case "root":
// 		console.log('is root');
// 		break;
// 	default:
// 		console.log('is default');
// }

// var x = +process.argv[2];
// if (x % 2) {
// 	console.log("не чет");
// } else if (x == 0) {
// 	console.log("0");
// }
// else {
// 	console.log("чет");
// } 
// var massage = x % 2 ? "не чет" : "чет";
// console.log(+process.argv[2] % 2 ? "не чет" : "чет");
// var x = process.argv[2]; //года
// var y = process.argv[3]; //сумма

// var massage = x >10 ? y * (y * 0.25) : y;
// console.log(massage);

// var len = +process.argv[2];

// var str1 = "", str2 = "", char1, char2;
// var len2;
// len2 = len;

// for (var k = 0; k < len; k++) {
// 	for(var i = 0; i < len2; i++){
// 		char1 = i % 2 ? "#" : "_";
// 		// char2 = i % 2 ? "_" : "#";
// 		char2 = char1 == "#" ? "_" : "#";
// 		str1 += char1;
// 		str2 += char2;
// 	}
// 	console.log(k % 2 ? str1 : str2)
// 	str1 = "";
// 	str2 = "";
// 	// len2--;
// }
// // console.log(+process.argv[2] < 0 ? "отр" : (+process.argv[2] = 0 ? "0" : "полож"))

// for (var i = 0; i > -100; i--) {
// 	if (i % 10 != 0){
// 		continue;
// 	}
// 	console.log(i);
// // }

// var array = [1, "test", false, "liga"];

// console.log(array[0]);
// console.log(process.argv)

// var password = ["dasd", "1234", "root"];
// var userPassword = process.argv[2];
// for (var i = 0; i < 3; i++){
// 	if (userPassword == password[i]) {
// 		console.log("you auth");
// 		break;
// 	}
// }

// var ar = [10, 21, -1, 32, 89, -300, 7];
// var x = process.argv[2];
// var y = 0;

// for (var i = ar.length - 1; i >= 0; i--) {
// 		if (x == ar[i]) {
// 			y = 1;
// 	}
// }
// console.log(y == 1 ? "угадал" : "не угадал");

// var text = ar[0];
// for (var i = ar.length - 1; i >= 0; i--) {
// 	if (ar[i] < text) {
// 		text = ar[i];
// 	}
// }
// console.log("minimum", text);

// var mid = 0;
// for (var i = ar.length - 1; i >= 0; i--) {
// 	mid = mid + ar[i];
// }
// mid = mid / (ar.length);
// console.log("average", mid);

// console.log(ar[100])

var ar = [];
var len = +process.argv[2];
// ar[(len-1)] = len;
for (var i = 0; i <= len; i++) {
	ar[i] = i;
}
console.log(ar.length);
console.log(ar);