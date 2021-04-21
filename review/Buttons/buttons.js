const $body = document.querySelector('body');
const $textButton = document.querySelector('.text-btn');
const $redButton = document.querySelector('.add-red');
const $addButton = document.querySelector('.add-btn');
const $deleteButton = document.querySelector('.delete-btn');
const $resetButton = document.querySelector('.reset-btn');
const $toggleButton = document.querySelector('.toggle-btn');
const $imageButton = document.querySelector('.image-btn');
let $boxes = document.querySelectorAll('.box');
let toggleFlag = false;
const src = "https://i.imgur.com/69NjYBH.png";

$redButton.addEventListener('click', (event) =>
    $boxes.forEach(box=> {
        if(box.classList.contains('red'))
            return;
        else
            box.className += ' red';
    })
)

$addButton.addEventListener('click', addBox)

$deleteButton.addEventListener('click', deleteBox)

$textButton.addEventListener('click', (event) => {
    const str = document.querySelector('.txt').value;
    $boxes.forEach(box=>{
        box.innerHTML = str;
    })
})

$resetButton.addEventListener('click', (event) => {
    $boxes.forEach(deleteBox)
})

$toggleButton.addEventListener('click', (event) => {
    if(!toggleFlag) {
        $boxes.forEach(box=>box.style.display = 'none')
        toggleFlag =true;
    }
    else {
        $boxes.forEach(box=>box.style.display = 'block')
        toggleFlag = false;
    }
})

$imageButton.addEventListener('click', (event) => {
    if($boxes.length === 0) addBox;

    let str = `<img src = " ${src} ">`;
    $boxes.forEach(box => box.innerHTML = str)
})

function addBox() {
    const box = document.createElement('div');
    box.className = "box";
    $body.appendChild(box);
    $boxes = document.querySelectorAll('.box');
}

function deleteBox() {
    if($boxes.length !== 0)
        $boxes.item(0).remove();
    $boxes = document.querySelectorAll('.box');
}