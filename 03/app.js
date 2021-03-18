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