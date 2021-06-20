const popularURL = "./popular.json";
const recentURL = "./recent.json";
const viewURL = "./view.json";
const loadingTime = 1000; // 1초
const loadPageLength = 10;
let loadedPageNumber = 0;
let url = "";

const $nav = document.querySelector(".nav");
const $navTabs = document.querySelectorAll("a");
const $loadIcon = document.querySelector(".loading");
const $button = document.querySelector(".btn");
let $list = document.getElementById("list");
let $flexContainer = document.getElementById("flex-container");

removeButton();
removeLoadIcon();

/* 탭이 선택된 경우 이벤트 */
$nav.addEventListener("click", function (event) {
  loadPage(event.target);
});

/* 더보기 클릭이 남은 10개 보여주기 */
$button.addEventListener("click", function (event) {
  if (loadedPageNumber !== 0) load();
});

function loadPage(eventTarget) {
  $flexContainer.innerText = ``;
  loadedPageNumber = 0;

  // 각 탭이 선택되면 선택된 탭 class(active) 적용
  if (eventTarget.nodeName === "A") {
    const target = eventTarget;
    clearClass();
    eventTarget.parentElement.className = "active";
  }

  selectTab();
  load();
}

function clearClass() {
  $navTabs.forEach(function (a) {
    if (a.parentElement.className === "active") {
      a.parentElement.classList.remove("active");
    }
  });
}

/* class가 active인 경우 가져올 JSON 파일 URL로 설정 */
function selectTab() {
  const $tab = document.querySelector(".active");

  if ($tab.innerText === "최근") url = recentURL;
  else if ($tab.innerText === "많이본") url = viewURL;
  else url = popularURL;
}

function load() {
  showLoadIcon();
  removeButton();
  setTimeout(showContents, loadingTime);
}

/* 가져온 데이터를 id=list 에 노출 */
function showContents() {
  removeLoadIcon();
  loadJSON(url, function (json) {
    for (let i = loadedPageNumber; i < loadedPageNumber + loadPageLength; i++) {
      if (i >= json.length) break;
      addContent(json[i]);
    }
    loadedPageNumber += 10;
  });
  showButton();
}

function addContent(item) {
  const contentBox = createTemplate();

  contentBox.setAttribute("onclick", `location.href = "${item.url}";`);
  contentBox.setAttribute("style", "cursor: pointer");

  if (contentBox.hasChildNodes()) {
    var contentItems = contentBox.childNodes;

    /*
     *  contentItems[0] : content-img
     *  contentItems[1] : content-title
     *  contentItems[2] : content-cp
     */

    // 이미지 src 설정
    if (contentItems[0].className === "content-img") {
      contentItems[0].setAttribute("src", item.img);
    }

    // 제목 innerText 설정
    if (contentItems[1].className === "content-title") {
      contentItems[1].innerText = item.title;
    }

    // CP innerText 설정
    if (contentItems[2].className === "content-cp") {
      contentItems[2].innerText = item.cp;
    }
  }
}

/* 한 콘텐츠의 템플릿 */
function createTemplate() {
  const contentBox = document.createElement("div"); // 콘텐츠 영역
  const image = document.createElement("img"); // 이미지 영역
  const title = document.createElement("div"); // 제목 영역
  const cp = document.createElement("div"); // CP 영역

  contentBox.className = "content-box";
  image.className = "content-img";
  title.className = "content-title";
  cp.className = "content-cp";

  contentBox.appendChild(image);
  contentBox.appendChild(title);
  contentBox.appendChild(cp);
  $flexContainer.appendChild(contentBox);

  return $flexContainer.lastElementChild;
}

/* JSON 파일 로딩 */
function loadJSON(url, callback) {
  const xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", url, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}

function showButton() {
  $button.style.display = "";
}

function removeButton() {
  $button.style.display = "none";
}

function showLoadIcon() {
  $loadIcon.style.display = "";
}

function removeLoadIcon() {
  $loadIcon.style.display = "none";
}
