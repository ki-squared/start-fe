// let a = 'aa';
// const b = 'bb';
// var c = '11';
// c = 33;
// b = 11;
// console.log(a, b, c);

// // var str = '';
// // str += '<img src="'+todayPhoto[0].img+'"> ';
// // str = '<img src = "${todayPhoto[0].img}">';

// // const s = 'aaaa
// // cccc
// // ddd'
// // console.log(s);

// // function sum(x, y=1) {
// //     return x+y;
// // }
// // console.log(sum(1));


// const arr = [1, 2, 3];
// const newArr = arr.map(function(item) {
//     return item+1;
// });

// const newArr2 = arr.map((item)=>item+1);

// console.log(newArr, newArr2);

// document.getElementById('box').addEventListener('click', event=>console.log(1));


// function sum(x, y, x) {
//     return x + y + z;
// }

// const numbers = [1, 2, 3];
// console.log(sum(...numbers)); // console.log(sum(1, 2, 3));


const words = ['a', 'b'];
const newWords = [...words];
console.log(newWords);

const arr1 = [3, 4, 5];
const arr2 = [1, 2, ...arr1, 6, 7];
console.log(arr2);

function func(...param) {
    console.log(param);
}

func(1, 2, 3);


function func2() {
    console.log(arguments);
}

func2(1, 2, 3);

const {team, area} = obj;
const [col1, col2] = cols;
const [, cols2] = cols;

function getArea({width, height}) {
    return width*height;
}