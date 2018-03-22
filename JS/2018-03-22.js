// // function sum() {
// // 	var s = [];
// // 	var d = 0;
// // 	for(var i=0; i<arguments.length; i++) {
// // 		s = s.concat(arguments[i])
// // 	}
// // 	for (let k = 0; k < s.length; k++) {
// // 		d += s[k];
// // 	}
// // 	return d
// // }

// // console.log(sum(1,1,[1,2]));

// var phone = {
// 	brend: 'Apple',
// 	model: 'A1780',
// 	storage: '32GB',
// 	color: 'black'
// }

// console.log(phone);

// phone.brend = 1
// phone.model = 1
// phone.storage = 1
// phone.color = 1


// console.log(phone);

// delete phone.color
// delete phone.storage
// console.log(phone);


// // phone.name = 'samsung'

// if ('name' in phone) {
// 	console.log(phone.name);
// } else {
// 	console.log('нет такого свойства');
// }


// var a =[]

// var b=a
// a[0]=11
// console.log(a);
// console.log(b)
// function d(v) {
// 	v[0]=100
// }

// d(b)

// console.log(a);
// console.log(b);

// phone.show_1 = function() {
// 	console.log(this);
	
// }
// phone.show_2 = () => 	console.log(this);

// phone.show_1()
// phone.show_2()

// var a = {
// 	c: 1,
// 	d: function() {
// 		console.log(this);
		
// 	}
// }
// var b = {
// 	j: 1,
// 	i: function() {
// 		console.log(this);
		
// 	}
// }

// var c = {}

// for (var key in a) {
// 	c[key] = a[key];
// }

// delete a.d;
// console.log(a);
// console.log(c);

// function xerox(obj) {
// 	var res = {};
// 	for (var key in obj) {
// 			res[key] = obj[key];
// 		}
// 	return res;
// }

// var a = {
// 	name: 'test',
// 	name2: 'test2'
// }
// // var c = xerox(a)

// var c = { ...a }
// delete a.name;
// console.log(a);
// console.log(c);

// function A() {
// 	this.a = 100;
// 	this.d = function() {
// 		console.log(this);
		
// 	}
// }

// const f = new A();
// const g = new A();
// f.a++;
// console.log(f);
// console.log(g);

// function User(name, login) {
// 	this.name = name;
// 	var login = login;

// 	this.sayName = function () {
// 		console.log(this.name);
		
// 	}
// 		this.showLogin = function (secretKey) {
// 			if (secretKey === "key") {
// 				return login;
// 			} else {
// 				return"access error"
// 			}
// 		}
// 	}
// }

// const user1 = new User("Sergey", "123");
// const user2 = new User("Ivan", "321");
// console.log(user1.name);
// console.log(user2);

// var userJon = {
// 	get: function () {
// 		console.log(this.name);
		
// 	},
// name: "Jon"
// }

// var userBil = {
// 	name: "Bil"
// }

// userJon.get();
// userJon.get.call(userBil);

// for (var i = 0; i < 10; i++) {
// 	setTimeout(function(i) {
// 		console.log(i);
		
// 	}.bind(this, i), 1000)
// }

// function a(k) {
// 	console.log(k);
	
// }

// var f2 = a.bind({}, "kkk");
// var f3 = a.bind({}, "333")
// f2()
// f3()


// var d = {
// 	user: null
// };

// try {
// 	console.log(d.user.name);
// 	console.log("test");
	
// } catch (error) {
// 	console.log("error");
// 	console.log(error);
// } finally {
// 	console.log("i work all");

// }
// console.log("end");

function sum(a,b) {
	if (typeof a === "number" && typeof b === "number") {
		return a+b;
	} else {
		throw new Error("a or b not number")
	}
}

// console.log(sum(1,"sda"));
// console.log(sum("end"));

try {
	sum(1,"sda")
} catch (error) {
	console.log("name ***************");
	console.log(error.name);
	console.log("name ***************");
	
	console.log("message ***************");
	console.log(error.message);
	console.log("message ***************");

	console.log("stack ***************");
	console.log(error.stack);
	console.log("stack ***************");
}