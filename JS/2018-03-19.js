// function a(b,c) {
//     if (isNaN(b)) {
//         console.log(b);
//     }
//     if (isNaN(c)) {
//         console.log(c);

//     }
// }

// a("c",2);
// a(2,"2");
// a(NaN,NaN);

function dz3(max) {
	//параметр max для максимального количества массива и максимального числа в массиве
    var ar = [];
    x = 10;
    max = 1000;
	// x = Math.random() * max;
	for (var i = 0; i < x; i++) {
		ar[i] = parseInt(Math.random() * max);
    }
    
    
    
    //сортировка пузырьком
    // var k =ar.length;
    // while(k--){
    //     var j = ar.length;
    //     while(j--) {
    //         if (ar[j] > ar[j+1]) {
    //             ar[j] = ar[j] + ar[j+1];
    //             ar[j+1] = ar[j] - ar[j+1];
    //             ar[j] = ar[j] - ar[j+1];	
    //         }
    //     }
    // }
	return ar;
}

// console.log(dz3())
var arrayTest = dz3();
// console.log(arrayTest);
// arrayTest.sort(function(a,b) {
//     return a - b;
// })
// console.log(arrayTest);

// console.log(arrayTest.reverse());

// function log(params) {
//     console.log(params);

// }

// function test(m, calbackFunction) {
//     for (let i = 0; i < m.length; i++) {
//         calbackFunction(m[i])

//     }    
// }

// test(arrayTest, log)

//функция которая получает число и потом умножает на случайное число от 0 до 10
// function rand(x) {
//     r = parseInt(Math.random() * 10);
//     x*=r
//     return x;
// }

// function test2(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = cb(arr[i]);//берем элемент массива и передаем его в функцию имя которой приходит вторым аргументом при вызове функции
//     }
//     return arrayTest;
// }

// console.log(test2(arrayTest, rand));

// function log(msg, cb) {
//     if (typeof cb === 'function') {
//         cb(msg);
//     } else {
//         console.log(msg);

//     }
// }


// log("hello world", function(a) {
//     console.log('*********************');
//     console.log(a);
//     console.log('*********************');
// })

// log("hello world", function(a) {
//     console.log('ssssssssssssssssssss');
//     console.log(a);
//     console.log('ssssssssssssssssssss');
// })

// log('hello world', (a) => {
//     console.log('ffffffffffffffff');
//     console.log(a);
//     console.log('ffffffffffffffff');
// })
// function test3 (a) {  
//     console.log('rrrrrrrrrrrrrr');
//     console.log(a);
//     console.log('rrrrrrrrrrrrrr');
// }

// log('hello world', test3) 

// var a = [1,2,3];
// var b = [3,2,1];

// var c = [-3, -2, -1, 0, 100];
// //.concat добавляет в один массив значения из другого
// var d = c.concat(a, b, 1, 2); 
// console.log(d);
// //.indexOf ищет номер под которым находится нужжный элемент
// console.log(d.indexOf(100));


// console.log(a.splice(2, 1));
// console.log(a);

// console.log(b.slice(1, 1));
// console.log(b);

var a = [1,2,3];
// var b = a.map(function(element, index, self) {
//     console.log(element);
//     console.log(index);
//     console.log(self);
// })

// var b = a.map((element, index, self) => {
//     console.log(element);
//     return element * 2
// })

// console.log(b);

// function maps(array, cb) {
//     var arr=[]
//     for (let i = 0; i < array.length; i++) {
//         arr[i] = cb();     
//     }
//     return  arr
// }

// function rando() {
//     return Math.random()*10;
// }
// console.log(maps(a, rando));

// function tohundred() {
//     var i = 100
//     while(i--)
// }


var a = [100,2,3];
var u = a.every(function(a) {
    return a > 0;  
})

// console.log(u);

var s = a.some(function(a) {
    return a > 0;  
})

// console.log(s);

var f = a.filter(function(a) {
    return a > 0;  
})

// console.log(f);

var r = a.reduce(function(res,element,index,self) {
    // console.log(res,element,index,self);
    return res * element;  
})

// console.log(r);

function concat() {
console.log(arguments.length);
var len = arguments.length;
var array = []
for (var i = 0; i < len; i++) {
    array.push(arguments[i])
}
return array
}

var arr = concat(1,2,3,4,5,6,6);

console.log(arr);

//дописать функцию что-бы она работала как функция конкат