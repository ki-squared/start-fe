console.log('app.js');

var arr = [1, 2, 3];
for(var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

/* Create */
var todos = ['운동'];
var todo = '코딩';
todos.push(todo);
console.log(todos);

/* Read */
todos.forEach(function(todo){
        console.log(todo);
});

/* Update */
var updateTodo = '운동';
var updateIndex = todos.findIndex(function(todo) {
    return todo === updateTodo;
});

todos[updateIndex] = '과제';
console.log(todos);

var todos = ['운동', '게임'];
var updateTodo = '게임';

var newTodos = todos.map(function(todo) {
	if(todo===updateTodo) {
		return '공부'
	}
	return todo;
});

console.log(newTodos);


/* Delete */
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
	return todo === deleteTodo;
});

todos.splice(deleteIndex, 1);
console.log(todos);

var deleteTodo = '운동';
var newTodo = todos.filter(function(todo) {
    return todo !== deleteTodo;
});
console.log(newTodo);



/* 참조 */
// Value
var a = 1;
var b = a;
b = 2;
console.log(a, b); // 1 2

var a = [1];  // 배열 > 참조
var b = a;
b[0] = [2];
console.log(a, b); // 둘 다 array, 값은 [2]가 된다

// 참조 Reference
var a = {x:1};
var b = a;
b.x = 2;
console.log(a, b); // {x: 2} {x: 2} 


// call by value
function byValue(count) {
	count = count+2;
}
var count = 3;
byValue(count);
console.log(count); // 3

// call by reference
function byReference(count) {
	count.push('2');
}
var count = ['1'];
byReference(count);
console.log(count);  // ["1", "2"]


/* 구문 */
var isMan = true;
if(isMan) {
    console.log('나는 남자');
} else {
    console.log('나는 여자');
}

/* 주요 전역 함수 */
alert('안녕하세요');
var who = prompt('당신은 누구세요');
confirm('정말 삭제하시겠습니까?');

function test() {
	console.log('test()');
}

var id = setTimeout(test, 1000); // 1초 후 1번 실행
var id = setInterval(test, 1000); // 1초 마다 계속 실행

// setInterval보다 나은 방법
function test() {
	console.log('test()');
	setTimeout(test, 1000);
}

/* Scope */
var nick = 'aji';  // 전역변수

function test() {
	var age = 30;
	console.log(nick, age);
}
test();
console.log(age); // age not defined!


/* 함수 */
function sum(a, b) {
    return a+b;
}
console.log(sum(1,2));

var car = {
	year: '2014',
	starting: function() {
		console.log('starting..');
	},
};

car.starting();


/* 여러가지 함수의 형태 */
(function() {
    var a = 'a';
    console.log(a);
})(); // 나름의 캡슐화 효과가 있다! 함수를 만드는 동시에 실행



function sum(x, y) {
    if(!y) y = 1;
    console.log(x+y);
}

sum(3);



/* 정규 표현식 */
var text = 'abc def'; // 대상 문자열
var testReg = /abc/;  // 찾을 문자열
var result = testReg.test(text);
console.log(result); // true

var text = 'abc def'; // 대상 문자열
var matchReg = /abc/; // 찾을 문자열
var result = text.match(matchReg);
console.log(match); // true

var text = 'abc def';    // 대상 문자열
var replaceReg = /def/;  // 바꿀 대상 문자열
var result = text.replace(replaceReg, 'ㄱㅏㄴㅏㄷㅏ');
console.log(result);