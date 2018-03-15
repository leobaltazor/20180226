// var str ="Hello world d d ";

// // console.log(str[0]);
// // console.log(str[str.length - 1]);

// function probel(ar) {
//     var j = 0;
//     for (let i = 0; i < ar.length; i++) {
//         if (ar[i] == " ") {  
//              j++;
//         }
        
//     }
//     return j;
// }

// console.log(probel(str))

// function countingSpace(str) {
//     var count = 0;
//     for(var i = str.length; i--;) 
//     (" " === str[i]) && (count++);

//     return count;
// }

// console.log(countingSpace(str));


// var str1 = "0123";
// var str2 = "1";
// var f = function(str1, str2) {
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] == str2)[0] {
//             return true
//         } else {
//             return false
//         }
        
//     }

// }

// console.log(f(str1,str2))
// var len = 10;
// min = -50;
// max = 50;

// var arRandom = function(leng,max) {
//     var arF = [];
//     var min = -max;
//     for (let i = 0; i < leng; i++) {
//         arF[i] = parseInt(min + Math.random() * (max - min));
//     } 
//     return arF
// }

// function filter(x, array) {
//     var otvet = [];
//     var k = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] < x) {
//         otvet[otvet.length] = array[i];
//         otvet[k] = array[i];
//             k++
//     }
//     }
//     // return otvet;
//     console.log(array);
//     console.log(otvet);
// }
// // console.log(filter(500000000,ar(len)));
// filter(10, arRandom(len,max));

// var str1 = "Hello world";
// var str2 = "wo";

// function include(str1, str2) {
//     // if (str1.indexOf(str2) >= 0) {
//     //     return true
//     // } else {
//     //     return false
//     // }
//     return (str1.indexOf(str2) >= 0) ? true : false
// }

// include = (s, _) => s.indexOf(_) != -1;

// console.log(include(str1,str2))

// function cut(str1, x){
//     var rez = ""
//     for (let i = 0; i < str1.length; i++) {
//         if (i % x) {
//             rez += str1.substr(i,1)
//         }
        
//     }
//     return rez
// }

// console.log(cut(str1,2))

// var arRandom = function(leng,max) {
//     var arF = [];
//     var min = -max;
//     for (let i = 0; i < leng; i++) {
//         arF.push(parseInt(min + Math.random() * (max - min)))
//     } 
//     return arF
// }

// function cutt(ar, x) {
//     var ara0=[];
//     var ara1=[];
//     for (let i = 0; i < ar.length; i++) {
//         if (ar[i] % 2 == 0){
//             ara0.push(ar[i])
//         } else {
//             ara1.push(ar[i])
//         }
        
//     }
//     console.log(ar)
//     console.log(ara0)
//     console.log(ara1)
// }

// cutt(arRandom(10, 50), 10)

var str = "abcdfdcba"
var otvet="";
var ar = [];
ar = str.split('');

for (let i = 0; i <= ar.length/2; i++) {
    first = ar.shift();
    last = ar.pop();
    // console.log(first)
    // console.log(last)
    if (first == last) {
        otvet = "da"
    } else {
        otvet ="net"
        break
    }
    // console.log(ar)
}
// console.log(str)
// console.log(ar)
console.log(otvet)