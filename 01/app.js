console.log('app.js');

// var name = '강민주';
// var Name = '강민주';    // JS는 대소문자를 가린다. 
// console.log(name);
// console.log(Name);

/*
var isDeveloper = true; // Boolean
var isDeveloper = "true"; // String 형
console.log(isDeveloper);
*/

/*
function log(str) {
    console.log(str);
}

var log = function(str) {
    console.log(str);
}

log("Hello");
*/

/*
var image ={};
console.log(image); // {}가 log에 나타난다, 화살표 -> 객체의 속성 때문

var image = {
    width:100,
    height:100,
    name: '1.jpg',
};

*/

/*
var image1 = [1, 2, 3, 4, 'a', {}]; // 여러 데이터타입을 넣는 건 지양.
image1[0] = 'a';
console.log(image1);
*/

/*
var data = null; // 값이 없음
var data1 = ''; // 빈 값임
var data2;
console.log(data, data1, data2); // null "" undefined
*/

/* 연산자 */

console.log(1+2);
console.log('a'+'b');
console.log(1+'4'); // 14


var count = 1;
var number = '2';
console.log(count+number); // 12

console.log(1 == 1);    // true
console.log('' == 0);   // true
console.log('' == '0')  // false
console.log('' === 0)   // false  > === !== 일치 연산자를 쓰는 습관!

if(true) {
    console.log(1);
}

var isHero = true;
if(isHero) {
    console.log('hero');
}

console.log(typeof 1); // number
console.log(typeof []);     // object
console.log(typeof '1');    // string



