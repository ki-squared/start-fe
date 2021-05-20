const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-txt');
const $result = document.querySelector('#result');
const url = 'https://dapi.kakao.com/v2/search/web'
const headers = { Authorization: 'KakaoAK cb647de7fb445740354de8a82993de38' }

function success(data) {
    const { documents } = data.documents;
    const li = documents.map(doc => {
        return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a></li>`
    });

    $result.innerHTML = `<ul class="list-group list-group-flush">${li.join('')}</ul>`;

}

function error() {
    alert('데이터를 가져올 수 없습니다.');
}

function search() {
    const {value} = $text;
    if(value === '') {
        alert('검색어를 입력하세요');
        return false;
    }

    fetch(`${url}?query=${value}`, {headers}).then((res)=>res.json()).then(success).catch(error);
    return true;
}

$btn.addEventListener('click', search);