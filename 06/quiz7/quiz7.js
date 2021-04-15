const $point = document.getElementById('point');
const $life = document.getElementById('life');
const $bug = document.getElementById('bug');
const $box = document.querySelector('.box');

const max = $box.offsetWidth - $bug.offsetWidth;
let clickFlag = false;

$bug.addEventListener('click', clickBug);
let interval = setInterval(positionBug, 1000);

function clickBug() {
    clickFlag = true;
}

function positionBug() {
    const randX = Math.floor(Math.random() * max);
    const randY = Math.floor(Math.random() * max);
    $bug.style.left = `${randX}px`; 
    $bug.style.top = `${randY}px`;
    renewScore();
}

function renewScore() {
    if(clickFlag) {
        $point.innerHTML = parseInt($point.innerHTML)+1;
        clickFlag = false;
    } else {
        $life.innerHTML -= 1;
        if($life.innerHTML == 0) {
            clearInterval(interval);
            alert('게임 끝!');
        }
    }
}


