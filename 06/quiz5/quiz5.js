const $boxes = document.querySelectorAll('.box');

let box = null;

for(const box of $boxes) {
    box.offset = {x:0, y:0};
    box.isDown = false;
    box.addEventListener('mousedown', mouseDown);
    box.addEventListener('mouseup', mouseUp);
    box.addEventListener('mousemove', mouseMove);
}

function mouseDown(event) {
    box = event.target;
    box.isDown = true;
    box.offset.x = box.offsetLeft - event.clientX;
    box.offset.y = box.offsetTop - event.clientY;
    console.log(box.offset.x)
}

function mouseUp(event) {
    box = event.target;
    box.isDown = false;
    console.log("up");
}

function mouseMove(event) {
    box = event.target;
    if(!box.isDown) return;
    box.style.left = event.clientX + box.offset.x + 'px';
    box.style.top = event.clientY + box.offset.y + 'px';
    console.log("move");
}