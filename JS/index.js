// var number1 = 14;
// var number2 = 98.6;
// var number3 = -14;
// var number4 = NaN;
// var number5 = Infinity;
// var und;

// //  + sum
// var summ = number1 + number2;

// // 	-
// var minus = number1 - number2;

// // 	/
// var dele = number1 / number2;

// // 	*
// var mult = number1 * number2;


// var naan = number1 / "d";

// console.log(summ, minus, dele, mult, naan);
// console.log(und);

	//zadanie 1

// var x = 70,
// 	y = -20;

// // var rez = x;
// // x = y;
// // y = rez;
// console.log("X " + x, " Y " + y);

// x = x + y;
// y = x - y;
// x = x - y;

// console.log("X " + x," Y " + y);

//secont

// var p1 = "Hello world",
// 	p2 = "Chupryna Oleksii";

// console.log(p1 + ' " " ' + p2)

// var p1 = `Так задается многострочный 
// комментарий /* текст */`
// console.log(p1)


// //ШАБЛОННЫЙ ТЕКСТ
// var a = 3,
// 	c = 6;

// var text = `a+c=${a+c}`;
// // console.log(text);

// var p1 = "Oleksii",
// 	p2 = "HTML",
// 	p3 = "CSS",
// 	p4 = "JavaScript",
// 	p5 = "Photoshop";
// var p = ["CSS", "HTML"];
// 	var text = `My name is ${p1}`;
// console.log(text);
// for (var i = 0; i < p.length; i++) {

// 	var text = `Я изучаю ${p[i]}`;
// console.log(text);
// } 
// 	var text = `My name is ${p1}`;
// console.log(text);
// 	var text = `Я изучаю ${p2}`;
// console.log(text);
// 	var text = `Я изучаю ${p3}`;
// console.log(text);
// 	var text = `Я изучаю ${p4}`;
// console.log(text);
// 	var text = `Я изучаю ${p5}`;
// console.log(text);

// var num = "1000";
// console.log(num + 1);

// var testbool = true;
// var testbool = false;
// console.log(testbool);


// var x;
// // x=1;
// console.log(x)

// var p1 = 10,
// 	p2 = "test1",
// 	p3 = true;

// console.log(typeof p1, typeof p2, typeof p3)

// var a = 1, 
// 	b = typeof a;
// console.log(typeof b)

// var a = 0;
// console.log(--a);
// console.log(a--);
// console.log(a);

// var a = 0;
// var b = 10;
// var text = `
// a+=b:${a+=b}, 
// a-=b:${a-=b}, 
// a*=b:${a*=b}, 
// a/=b:${a/=b},
// a%=b:${a%=b}`
// console.log(text)

// var t_temp = 20;
// z_temp = 30;

// if (t_temp<z_temp) {
// 	console.log("включить")
// } else {
// 	console.log("не нужно вкл")
// // }

// var x = 10,
// 	a = 1,
// 	b = 2,
// 	c = 3,
// 	d = 0;

// // a*x*x+b*x+c=null
// d=b*b-4*a*c




// // console.log(d)

// var a = "1";
// // console.log(a == 1);
// var x = prompt(`5`);

// if (x < 10) {
// 	console.log(`x < 10`)
// } else {
// 	console.log(`x > 10`)
// }
// console.log("возраст?")

// var age = process.argv[2];


// if (parseInt(age) >= 18) {
// 	console.log(age +" Доступ разрешен")
// } else if (age === undefined) {
// 	console.log("Вы не ввели возраст")
// }
// else {
// 	console.log("Доступ запрещен")
// }

// var DOSTUP_OK	=	"Доступ разрешен",
// 	DOSTUP_ERROR	=	"Доступ запрещен";

// var login	= "123",
// 	pass	= "321",
// 	login_i	= process.argv[2],
// 	pass_i	= process.argv[3];


// if (login === login_i && pass === pass_i) {
// 		console.log(DOSTUP_OK)
// 	} else {
// 	console.log(DOSTUP_ERROR)
// }
// var summ	= process.argv[2],
// 	year	= process.argv[3];

// if (parseFloat(year) <= 2) {
// 	console.log(parseFloat(summ)*1.1)
// } else if (year < 4) {
// 	console.log(parseFloat(summ)*1.15)
// } else {
// 	console.log(parseFloat(summ)*1.25)
// }

// var a	= parseFloat(process.argv[2]),
// 	b	= parseFloat(process.argv[3]);

// if (a > 0 || b > 0) {
// 	console.log(DOSTUP_OK)
// } else {
// 	console.log(`sum = ${a+b}`)
// }
// var a 	=	parseFloat(process.argv[2]),
// 	b 	=	parseFloat(process.argv[3]),
// 	c 	=	parseFloat(process.argv[3]);
// var x1, x2, x;
// var d = b * b - 4 * a * c;
// if (d > 0) {
// 	x1 = (-b + Math.pow(d, 0.5)) / (2 * a);
// 	x2 = (-b - Math.pow(d, 0.5)) / (2 * a);
// 	console.log(`x1= ${x1}`)
// 	console.log(`x2= ${x2}`)
// } else if (d = 0) {
// 	console.log(`x1=x2 ${(-1*b)/(2*a)}`)
// } else {
// 	console.log(`корней нет`)
// // }


// var a 	=	"",
// 	b 	=	"s",
// 	c 	=	"1";
// var d = a || b || c ;
// console.log(d);
var name 	= "",
	n 		= parseInt(process.argv[2]);

for (var i = 0; i < n; i++) {
	name= name +"X";
	console.log(name);
	for (k = n; k >0; k--) {
		name=name + "X";
	}
}