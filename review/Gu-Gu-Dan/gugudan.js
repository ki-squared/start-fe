const $button = document.getElementById('btn');
const $number = document.getElementById('num');
const $result = document.getElementById('result');

$button.addEventListener('click', printTimes);

function printTimes() {
    const number = $number.value;
    if(number) {
        let str = '';
        for(let i=1; i<10; i++) {
            str += `
            ${number} X ${i} = ${number*i}
            `;
        }
        $result.innerHTML = str;
    } else {
        alert('숫자를 입력하시오.');
    }
}