const $box = document.getElementById('box');
const $minInput = document.getElementById('min');
const $maxInput = document.getElementById('max');
const $button = document.getElementById('btn');
let increase = false;

$button.addEventListener('click', function(event) {
    $button.disabled = true;
    const currentInt = getCurrentInteger();
    const randomInt = getRandomInteger();
    console.log(randomInt);
    changeNumberTo(currentInt, randomInt);
})

function getCurrentInteger() {
    if(isNaN($box.innerHTML)) {
        return 0;
    } else {
        return parseInt($box.innerHTML, 10);
    }
}

function getRandomInteger() {
    const min = parseInt($minInput.value, 10);
    const max = parseInt($maxInput.value, 10);
    return  Math.floor(Math.random() * (max - min + 1) + min);
}

function changeNumberTo(currentInt, randomInt) {
    increase = currentInt < randomInt ? true : false;

    var interval = setInterval(function() {
        if(currentInt === randomInt) {
            clearInterval(interval);
            $button.disabled = false;
            return;
        } else {
            if(increase) {
                currentInt += 1;
                $box.innerHTML = currentInt;
            } else {
                currentInt -= 1;
                $box.innerHTML = currentInt;
            }
        }
    }, 100)
    return;
}