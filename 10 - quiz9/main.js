const average = require('./average');
const random = require('./random');

console.log('평균 Test');
console.log(average(1,2,3,4,5,6));
console.log(average(1,'a',2));
console.log(average([1,2,3]));
console.log('\n');
console.log('랜덤 Test');
console.log(random(0, 100));
console.log(random(3));
console.log(random(0, 'a'));
console.log('\n');