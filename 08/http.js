const promise = fetch('/json.json');
console.log(promise);

promise.then(res => {
    console.log('res: ', res);
    const textPromise = res.text();
    console.log('textpromise: ', textPromise);

    textPromise.then(data => console.log('data: ', data));
})

function callback(data) {
    console.log('callback: ', data);
}

// window.open('https://daum.net');


/* JS 동적 삽입 */
// var head = document.getElementsByTagName("head")[0];
// var script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = ''; // src
// head.appendChild(script);