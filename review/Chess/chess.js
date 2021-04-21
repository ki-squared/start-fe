$board = document.getElementById("board");
var size = 4;

var str = '';
for(var i=0; i<size; i++) {
    for(var j=0; j<size; j++) {
        if((j+i)%2===0)
            str += '<span class="black"></span>';
        else
            str += '<span class="white"></span>';
    }
}
$board.innerHTML = str;

$squares = document.querySelectorAll('span');
$board.addEventListener('click', function(event) {
    if(event.target.nodeName == 'SPAN') {
        var target = event.target;
        
        $squares.forEach(function(square) {
            if(square.style.background==='red') {
                square.style.background = square.className;
            }
        })

        target.style.background = 'red';
        
    }
})