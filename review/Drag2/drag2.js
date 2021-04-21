const $boxes = document.querySelectorAll(".box");
let box = null;

$boxes.forEach(box=>{
    box.isDown = false;
    box.offset = {x:0, y:0};

    box.addEventListener('mouseup', mouseUp);
    box.addEventListener('mousedown', mouseDown);
    box.addEventListener('mousemove', mouseMove);
})

function mouseUp(event) {
    box = event.target;
    box.isDown = false;
}

function mouseDown(event) {
    box = event.target;
    box.isDown = true;
    box.offset.x = box.offsetLeft - event.clientX;
    box.offset.y = box.offsetTop - event.clientY;
}

function mouseMove(event) {
    box = event.target;
    if(!box.isDown) return;

    box.style.left = box.offset.x + event.clientX + 'px';
    box.style.top = box.offset.y + event.clientY + 'px';
}