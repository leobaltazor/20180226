var ar = [1,2,3,4,5,6,7,8,9,10],
	sum = process.argv[2];
console.time('mark')
console.log("###########################")
for (var i = 0; i < ar.length; i++) {
	for (var k = 0; k < ar.length; k++) {
		if (ar[i] + ar[k+i] == sum && ar[i] != ar[k+i]) {
			console.log(`${ar[i]} + ${ar[k+i]} = ${sum} ваши числа`)
		}

	}
}
console.log("###########################")
for (var i = 0; i < ar.length-1; i++) {
	for (var k = 0; k < ar.length; k++) {
		if (ar[i] + ar[k+1] == sum) {
			console.log(`${ar[i]} + ${ar[k+1]} = ${sum} ваши числа`)
		}

	}
}
console.log("###########################")
for (var i = 0; i < ar.length; i++) {
	for (var k = i; k < ar.length; k++) {
		if (ar[i] + ar[k] == sum && ar[i] != ar[k]) {
			console.log(`${ar[i]} + ${ar[k]} = ${sum} ваши числа`)
		}

	}
}

console.timeEnd('mark')