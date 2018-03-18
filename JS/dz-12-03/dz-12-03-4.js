function dz3(max) {
	//параметр max для максимального количества массива и максимального числа в массиве
	var ar = [];
	x = Math.random() * max;
	for (var i = 0; i < x; i++) {
		ar[i] = parseInt(Math.random() * max);
	}
	return ar;
}


ar = dz3(10) //параметр массива задаем тут
console.log(ar);


//Сумма
function summ(ar) {
	var sum = 0;
	for (var i = 0; i < ar.length; i++) {
		sum += ar[i];
	}
	return sum
}
console.log(`Сумма ${summ(ar)}`);

// ####################################
//Среднее
function midd(ar) {
	mid = summ(ar) / ar.length
	return mid
}
console.log(`Среднее ${midd(ar)}`)



// // mid = sum / ar.length;
// console.log(`Среднее ${mid}`)
// console.log(`Сумма ${sum}`)
// //Разность не уверен что правильно
// for (var i = 0; i < ar.length; i++) {
// 	// razn = razn - ar[i]
// }
// console.log(`Разность ${razn}`)
// //Количество четных / нечетных элементов
// for (var i = 0; i < ar.length; i++) {
// 	// if (ar[i] % 2 == 0) {chet++}
// 	// else {nchet++}
// }

// console.log(`Количество четных элементов= ${chet}, 
// Количество не четных элементов= ${nchet}`)
// //MIN MAX
// for (var i = 0; i < ar.length; i++) {
// 	// if (ar[i] > max) {max = ar[i]}
// 	// if (ar[i] < min) {min = ar[i]}
// }
// console.log(`min= ${min}, 
// max= ${max}`);
// //Количество положительных и отрицательных элементов
// for (var i = 0; i < ar.length; i++) {
// 	// if (ar[i] < 0) {otr++}
// 	// else if (ar[i] == 0) {zer++}
// 	// else {pol++}
// }
// console.log(`Количество положительных= ${pol}, 
// Количество отрицательных= ${otr},
// Количество 0= ${zer}`);