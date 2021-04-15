let $boxes = document.querySelectorAll('.box');
const $body = document.querySelector('body');
const $text = document.querySelector('.txt');

const src = "https://i.imgur.com/69NjYBH.png";

// buttons
const $addRed = document.querySelector('.add-red');
const $addBtn = document.querySelector('.add-btn');
const $deleteBtn = document.querySelector('.delete-btn');
const $textBtn = document.querySelector('.text-btn');
const $resetBtn = document.querySelector('.reset-btn');
const $toggleBtn = document.querySelector('.toggle-btn');
const $imageBtn = document.querySelector('.image-btn');



/* Solution 1 - add .red class */
$addRed.addEventListener('click', (event) => {
    // Add attribute '.red' to the box-class
    for(const box of $boxes) {
        if(box.classList.contains('red'))
            continue;
        box.className += ' red';
    }
});

/* Solution 2 - add .box element */
$addBtn.addEventListener('click', (event) => {
    // // Create '.box' element
    // const newDiv = document.createElement('div');
    // newDiv.className = 'box';
    // // Add '.box' element to 'body'
    // $body.appendChild(newDiv);
    // $boxes = document.querySelectorAll('.box');
    addBox();
});

/* Solution 3 - delete .box element */
$deleteBtn.addEventListener('click', (event) => {
    // if($boxes.length === 0) return;

    // $boxes.item(0).remove();
    // $boxes = document.querySelectorAll('.box');
    deleteBox();
});

/* Solution 4 - add text values */
$textBtn.addEventListener('click', (event) => {
    const text = $text.value;
    for(const box of $boxes) {
        box.textContent = text; // '+=' without refreshment
    }
});

/* Solution 5 - delete all .box element */
$resetBtn.addEventListener('click', (event) => {
    // // Found New Iteration Method!
    // Array.prototype.forEach.call($boxes, function(box) {
    //     box.parentNode.removeChild(box);
    // });
    // $boxes = document.querySelectorAll('.box');
    Array.prototype.forEach.call($boxes, deleteBox);
}); 

/* Solution 6 - toggle */
$toggleBtn.addEventListener('click', (event) => {
    Array.prototype.forEach.call($boxes, function(box) {
        if(box.style.display!=='none') box.style.display = 'none';
        else box.style.display = 'block';
    });
});

/* Solution 7 - image */
$imageBtn.addEventListener('click', (event) => {
    if($boxes.length === 0)  addBox();
    Array.prototype.forEach.call($boxes, function(box) {
        let str = `<img src = " ${src} ">`;
        box.innerHTML = str;
    });
});

/* Solution 8 */
// Create function 'addBox'
// Create function 'deleteBox' 
// Use single 'deleteBox' from Solution 3
// Iterate nodelist 'boxes' to use function 'deleteBox' at each box

function addBox() {
    // Create '.box' element
    const newDiv = document.createElement('div');
    newDiv.className = 'box';
    // Add '.box' element to 'body'
    $body.appendChild(newDiv);
    $boxes = document.querySelectorAll('.box');
}

function deleteBox() {
    if($boxes.length === 0) return;

    $boxes.item(0).remove();
    $boxes = document.querySelectorAll('.box');
}
