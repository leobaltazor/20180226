function dz3() {
	var ar = [];
	y = 1/Math.random();
	x = Math.random() * y;
	for (var i = 0; i < x; i++) {
		ar[i] = parseInt(Math.random() * y);
	}
	return ar;
}

console.log(dz3())