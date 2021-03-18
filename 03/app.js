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
alert('안녕하세요'); // 모든 코드를 멈추고 이 창을 띄워준다.

var who = prompt('당신은 누구인가요?');
console.log(who);

var isDelete = confirm('정말 삭제할건가요?'); // 값이 true, false로 넘어온다.
console.log(isDelete);

/* 퀴즈 */
var sum = 0;
var num = prompt('더할 숫자를 입력해주세요!');
while(num !== null) {
    sum+= parseInt(num);
    num = prompt('더할 숫자를 입력해주세요!');
}
alert('숫자의 총 합은: '+sum);

// isNaN -> not a number

function test() {
    console.log('test()');
} 

var id = setTimeout(test, 1000);  // 1초 후 1번 실행
var id = setInterval(test, 1000); // 1초마다 계속 실행

// setInterval 보다 나은 방법
function test() {
    console.log('test()');
    setTimeout(test, 1000);
}

test();
clearTimeout(id);
clearInterval(id);


/*
Hoisting
: var 구문, function 선언문을 해당 Scope의 가장 처음으로 옮기는것
: 상단에서 변수를 선언하는 것을 항상 권장!
*/

// 함수

function sum(a, b) {
    return a+b;
}
console.log(sum(1, 2));

function mult(a) {
    console.log(a+'단 출력');
    for(var j=1; j<10; j++) 
        console.log(i+'x'+j+'='+(i*j));
}

for(var i=1; i<10; i++) {
    mult(i);
}

// 함수 자체도 객체 속성이기 때문에 객체의 멤버로서 들어갈 수 있다!
var car = {
    year:'2014',
    starting: function() {
        console.log('starting ..'); // 이름이 starting! function 뒤에 명시 X도 okay
    },
};
car.starting();

var person = {
    name:'Minju Kang',
    birth: 20000312,
    sayHi: function(a) {
        console.log('Hi '+a+'~ Good to see you');
    },
}

person.sayHi('Nick');

// 익명 함수표현식
var car = function() {
    // 코드
};

// 익명 즉시실행함수, 스코프보호, 함수 안에서 선언한 변수를 외부에서 사용할 수 없으므로 캡슐화!
(function() {
    // 코드
})();

// 생략 가능한 전달인자
function sum(x, y) {
    if(!y) y=1;
    console.log(x+y);
}
sum(3);

// 가변 길이 전달인자 -> arguments.length
// arguments 객체로 인자 전달
// argument 객체는 배열은 아니다!!!!!
function sum() {
    var size = 0;
    for(var i=0; i<arguments.length; i++) {
        size += arguments[i]; // 배열처럼 접근했지만 arguments 객체는 배열이 아니다!
    }
    console.log(size);
}

sum(1, 2, 3, 4, 5, 7);

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

/*
 * 객체를 전달인자로 사용한다. 
 * 기본 타입 래퍼 객체 (var str = new String('jeju'));
 * call by value, call by reference 
 */

