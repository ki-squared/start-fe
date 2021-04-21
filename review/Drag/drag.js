const $box = document.getElementById('box');
let isDown = false;
let offset = {x:0, y:0};

$box.addEventListener('mousedown', (event)=> {
    console.log('mousedown');
    isDown = true;
    offset.x = $box.offsetLeft - event.clientX;
    offset.y = $box.offsetTop - event.clientY;
});

$box.addEventListener('mouseup', (event)=> {
    console.log('mouseup');
    isDown = false;
});

$box.addEventListener('mousemove', (event) => {
    console.log('mousemove');
    if(!isDown) return;

    $box.style.left = event.clientX+offset.x+'px';
    $box.style.top = event.clientY+offset.y+'px'; 
});

