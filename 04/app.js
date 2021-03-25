// /* BOM */
// /* Window */
// console.log(window.outerWidth);
// console.log(window.name);

// window.open('http:www.daum.net');
// window.close(); // window.open으로 띄운 창만 닫을 수 있다.

// /* Location */
// location.href = 'http:www.daum.net'
// location.reload();

// /* History */
// history.back(); // 이전 히스토리로 돌아감
// history.forward(); // 다시 앞으로 
// history.go(1);

// /* Screen */
// screen.width;
// screen.availWidth;

// /* Navigator - 브라우저 정보 */
// navigator.userAgent;
// navigator.language;
// navigator.platform;



/* DOM 탐색 */
/* .getElementById() */
console.log(document.getElementById('debug'));

var debug = document.getElementById('debug'); //debug 아이디를 가진 아이템을 가져온다(유일).
console.log(debug)

var box = document.querySelector('.box'); // box 클래스 아이템 중 첫번재 아이템을 가져온다.
var box2 = document.querySelectorAll('.box'); // box 클래스 아이템 모두를 Node list 형태로 가져온다.
var debug2 = document.querySelector('#debug'); // debug 아이드를 가진 아이템을 가져온다.
console.log(box)
console.log(box2);
console.log(debug2);


/* DOM 생성 */
/* .createElement() */
const div = document.createElement('div');
div.style.border = "1px solid red";
div.innerHTML = "hello!";
document.body.appendChild(div);
// Node.removeChild()
// Node.replaceChild()
// Node.insertBefore()
// Node.hasChildNodes()

/* DOM 삽입 */
const span = document.createElement('span');
const textNode = document.createTextNode('HI!!');
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);

/* DOM 제거 */
/* .remove() */
const debug3 = document.getElementById('debug');
debug3.remove(); // 오호 옴총 간단하군!
/* .removeChild() */
const list = document.getElementById('list');
list.removeChild(list.children[0]); // ul인 list 아래 두 li 중 첫 li 제거




/* Event */
// window.addEventListener('load', function(){
//     alert("load");
// }); // DOM 레벨2(권장)

// document.addEventListener('click', function(){
//     console.log('clicked');
// });

var clickCnt = 0;
function popup(event) {
    console.log(++clickCnt);
    console.log(arguments, this, event, event.type, event.currentTarget);
}
document.body.addEventListener('click', popup);

var app = document.getElementById('list');
app.addEventListener('click', function(event){
    if(event.target.nodeName=="LI") { // list 하위에 있는 모든 li에 대해! for문 활용할 필요 없음~!
        console.log(1);
    }
});

/* 이벤트 중지 - 이벤트 중첩 등의 상황에서 */
// EventListner 함수 안에서 마지막에 
// event.stopPropagation();

var cnt=0;
var link3 = document.querySelector('#link');
link3.addEventListener('click', function() {
    console.log(++cnt);
    event.preventDefault(); // 링크로 이동하는 동작을 수행하지 않는다!
});



