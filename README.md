# start-fe
2021학년도 카카오트랙 고급웹개발론 수업 실습

Web Programming 수업 노트 : [Personal Notion](https://www.notion.so/Web-Programming-f2437d5f4cbb40a2828630d2362dc5d2)



# Kakao Track - Web Programming

- 수업자료 : [https://start-fe.surge.sh](https://start-fe.surge.sh/)
- 동영상자료: [http://bit.ly/38f09K5](http://bit.ly/38f09K5)
- 수업에 대한 질문 [https://github.com/advanced-webapps-class/start-fe-2021/issues](https://github.com/advanced-webapps-class/start-fe-2021/issues)

- 수업 1 - 개발환경 세팅

    VSCODE, node.js 설치 등 개발환경 세팅

    Github 레퍼지토리 생성 : [https://github.com/ki-squared/start-fe](https://github.com/ki-squared/start-fe)

- 수업 2 - JS 기본 1

    - 변수와 상수

    ```jsx
    /* 변수 */
    let value = 1;
    console.log(value);
    // 변수에 관한 예제를 살펴보니, type에 대해 python에서 값을 부여할 때와 비슷하게 한다!
    ```

    ```jsx
    /* 상수 */
    const a = 1;
    // a=2; 불가 -> error: a is read-only
    ```

    : 변수의 경우, 첫번째 문자로 숫자 불가능

    : 변수명 대소문자 구분

    : 어떤 값도 넣기 가능, 자동 타입을 변환

    - 데이터 타입

        : Number

        ![Kakao%20Track%20-%20Web%20Programming%20670ac952130a443584b7989f178379fa/_2021-03-09__1.15.07.png](Kakao%20Track%20-%20Web%20Programming%20670ac952130a443584b7989f178379fa/_2021-03-09__1.15.07.png)

        : String, Boolean

        : String "true"는 if 문에서 저절로 Boolean 형 true로 변환된다. 

        : Function

        ```jsx
        function name(str) {
        	console.log(str);
        }

        var name = function(str) {
        	console.log(str);
        }
        ```

        : Map 혹은 Object

        ```jsx
        var image = {};  // image = new Object();

        image.width = 1;
        image.height = 1;

        image['width'] = 1;  // 연관배열
        image['name'+i] = '1.jpg';  // 동적으로 할당 가능

        image = {width:1, height:2};
        ```

        : 배열

        ```jsx
        image = [1, 2, 3, 4, 5, 'a', []];
        ```

        : null - 값이 없다. - 고의적으로 '없음'을 설정

        : undefined - 아직 값이 설정되지 않았다. - 아직 설정하지 않았기 때문에 값이 없음

        : return 구문이 없는 함수의 반환값

        : return 구문으로 아무것도 반환하지 않을 경우 

        : 없는 프로퍼티를 찾을 때

        : 함수 인자가 생략될 때

    - 연산자
        - 산술 연산자 (+, -, *, /, ++(), ()++, —(), ()— )
        - 대입 연산자 (=, +=, -=, *=, /=)
        - 논리 연산자 (!, &&, ||) - 순서: NOT → AND → OR
        - 비교 연산자

            === : 두 값이 일치하는지 확인

            == : 값의 일치성을 확인하나 타입을 검사하지는 않는다

            !== : 두 값이 일치하지 않는지 확인

            != : 값의 불일치성을 확인하나 타입을 검사하지는 않는다

            ```jsx
            '' == '0'; // false
            0 == ''; // true
            0 === ''; // false
            0 == '0' // true
            false == 'false' // false
            false == '0'; // true
            false == undefined; // false
            false == null; // false
            null == undefined; // true
            ' \t\r\n' == 0; // true
            ```

            → 따라서 일치 연산자 === !== 쓰는 것을 습관화해야 한다. 

            <, >, <=, >=

        - 문자열 붙이기 :  +

            ```jsx
            function hello(name) {
            	console.log('Hello, '+name+'!');
            }
            ```

            → ES6 Template Literal

            ```jsx
            function hello(name) {
            	console.log('hello, ${name}!');
            }
            ```

        - in : 해당 객체에 해당 속성이 있는지 확인하는 연산자

            ```jsx
            var image = { width: 1, height: 2 };

            console.log('width' in image); //true
            console.log('size' in image);
            console.log('toString' in image);
            ```

        - delete : 객체의 프로터티 삭제, var로 선언한 변수는 delete 불가

            ```jsx
            delete image.width;
            image.width = null  // value만 지우고 프로퍼티는 남겨둔다. 
            ```

        - typeof

            ```jsx
            typeof 1; // number
            ```

        - 모든 연산자

            [https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators)

- 수업 3 - JS 기본 2
    1. **객체**

        ```jsx
        var person = {
        	nick: 'FE',
        	age: 28,
        	area: 'jeju',
        	hobby: ['js', 'html'],
        };
        ```

        : JSON → { ... }; 부분

        - 기본 프로퍼티, 메소드 → Object에서 상속받은 프로퍼티와 메소드

            ![Kakao%20Track%20-%20Web%20Programming%20670ac952130a443584b7989f178379fa/_2021-03-09__2.55.50.png](Kakao%20Track%20-%20Web%20Programming%20670ac952130a443584b7989f178379fa/_2021-03-09__2.55.50.png)

            1. Constructor(생성자 함수)

                ```jsx
                obj.constructor == Object; // true
                ```

            2. hasOwnProperty(객체가 프로퍼티를 상속이 아닌 '소유'하는지 확인)

                ```jsx
                console.log(obj.hasOwnProperty('nick'));
                ```

            3. toString() → 문자열 반환, 그다지 유용하지 않는 정보 출력

                ```jsx
                alert(obj); // alert(obj.toString())
                ```

        - 내장 객체

            ```jsx
            console.log(window); // 브라우저 가장 최상위 객체
            var date = new Date();
            Math.floor(1.4); // static
            var pattern = new RegExp('^abc');  // 패턴매칭
            ```

    2. 배열 CRUD(배열로 가장 많이 하게 되는 작업)

        C : Create (생성)

        R : Read (읽기)

        U : Update (갱신)

        D : Delete (삭제)

        ```jsx
        var todos = ['운동'];
        var todo = '게임';
        todos.push(todo);
        console.log(todos);
        ```

        ```jsx
        var todos = ['운동', '게임'];
        todos.forEach(function(todo) {
        	console.log(todo);
        });
        ```

        ```jsx
        var todos = ['운동', '게임'];
        var updateTodo = '게임';
        var updateIndex = todos.findIn
        ```

        : Map : 모든 요소 각각에 대하여 주어진 **함수를 호출한 결과**를 모아 새로운 배열을 반환

        ```jsx
        var words = ['a', 'b', 'c'];
        var newWords = words.map(function(word) {
        	return word + ' ok';
        });
        console.log(newWords);
        ```

        ```jsx
        var todos = ['운동', '게임'];
        var updateTodo = '게임';

        var newTodos = todos.map(function(todo) {
        	if(todo===updateTodo) {
        		return '공부'
        	}
        	return todo;
        });

        console.log(newTodos);
        ```

        ```jsx
        var todos = ['운동', '공부', '목욕'];
        var deleteTodo = '공부';
        var deleteIndex = todos.findIndex(function(todo) {
        	return todo === deleteTodo;
        });

        todos.splice(deleteIndex, 1);
        console.log(todos);
        ```

        ```jsx
        var todos = ['운동', '공부'];
        var deleteTodo = '공부';
        var newTodos = todos.filter(function(todo) {
        	return todo!=deleteTodo;
        });
        console.log(newTodo); 
        ```

    3. 동적 타이핑

        ```jsx
        var foo = 42;  // foo는 number
        var foo = "bar"; // 이제 foo는 문자열
        ```

        ```jsx
        if("test") {    // 문자열은 if문 안에서 자동으로 true 변환
        	console.log(true);
        }
        console.log(2 + 5 + "1");  // 71
        ```

    4. 참고 타입

        변수에는 데이터에 대한 참조(reference)만 저장

        ```jsx
        // Value
        var a = 1;
        var b = a;
        b = 2;
        console.log(a, b); // 1 2
        ```

        ```jsx
        var a = [1];  // 배열
        var b = a;
        b[0] = [2];
        console.log(a, b); // 둘 다 array, b[0] = [2]
        ```

        ```jsx
        // 참조 Reference
        var a = {x:1};
        var b = a;
        b.x = 2;
        console.log(a, b); // {x: 2} {x: 2}
        ```

        ```jsx
        // call by value
        function byValue(count) {
        	count = count+2;
        }
        var count = 3;
        byValue(count);
        console.log(count); // 3

        // call by reference
        function byReference(count) {
        	count.push('2');
        }
        var count = ['1'];
        byReference(count);
        console.log(count);  // ["1", "2"]
        ```

    5.  구문

        if, for, while, 함수, try(일단 이걸 실행), catch(try에서 발생하면 넘어옴), finally(무조건 실행)

    6.  주요 전역 함수
        - alert

            ```jsx
            alert('안녕하세요');
            ```

            ![Kakao%20Track%20-%20Web%20Programming%20670ac952130a443584b7989f178379fa/_2021-03-09__5.35.36.png](Kakao%20Track%20-%20Web%20Programming%20670ac952130a443584b7989f178379fa/_2021-03-09__5.35.36.png)

            window 라는 브라우저 최상위에 속한 객체의 메서드

        - prompt

            ```jsx
            var who = prompt('당신은 누구세요');
            ```

            ![Kakao%20Track%20-%20Web%20Programming%20670ac952130a443584b7989f178379fa/_2021-03-09__5.37.32.png](Kakao%20Track%20-%20Web%20Programming%20670ac952130a443584b7989f178379fa/_2021-03-09__5.37.32.png)

        - confirm

            ![Kakao%20Track%20-%20Web%20Programming%20670ac952130a443584b7989f178379fa/_2021-03-09__5.39.15.png](Kakao%20Track%20-%20Web%20Programming%20670ac952130a443584b7989f178379fa/_2021-03-09__5.39.15.png)

            ```jsx
            confirm('정말 삭제하시겠습니까?');
            ```

        - setTimeout, setInterval, clearInterval

            ```jsx
            function test() {
            	console.log('test()');
            }

            var id = setTimeout(test, 1000); // 1초 후 1번 실행
            var id = setInterval(test, 1000); // 1초 마다 계속 실행

            // setInterval보다 나은 방법
            function test() {
            	console.log('test()');
            	setTimeout(test, 1000);
            }
            ```

    7. Scope

        ```jsx
        var nick = 'aji';  // 전역변수

        function test() {
        	var age = 30;
        	console.log(nick, age);
        }
        test();
        console.log(age); // age not defined!
        ```

        Hoisting

        : var 구문, function 선언문을 해당 Scope의 가장 처음으로 옮기는것

        : 상단에서 변수를 선언하는 것을 항상 권장!

    8. 함수

        : 어떤 객체의 속성으로 저장된 경우 메서드(method)라 한다. 

        : javascript 함수는 다른 함수 내에 중첩되어 정의도 가능하다. 

        ```jsx
        function 함수이름(전달인자1, 전달인자2, ..., 전달인자n) {
        	// 
        }
        ```

        : 함수 또한 데이터 타입이기 때문에, 객체에 속할 수 있다. 

        ```jsx
        var car = {
        	year: '2014',
        	starting: function() {
        		console.log('starting..');
        	},
        };

        car.starting();
        ```

        : [https://start-fe.surge.sh/js/function.html#여러가지-함수모양](https://start-fe.surge.sh/js/function.html#%EC%97%AC%EB%9F%AC%EA%B0%80%EC%A7%80-%ED%95%A8%EC%88%98%EB%AA%A8%EC%96%91)

        - 가변길이 전달인자→ arguments 활용

            ```jsx
            function sum() {
            	var size = 0;
            	for(var i=0; i<arguments.length; i++) {
            		size+=arguments[i];	
            	}
            	console.log(size);
            }
            sum(1, 2, 3, 4, 5, 6, 7);
            ```

        - 함수의 프로퍼티와 메소드

            함수이름.length : 함수가 전달받기를 기대하는 인자의 개수

            직접 정의 → 함수이름.count = 1; // static 함

            함수이름.prototy

    9. 정규표현식

        : 문자열에 나타나는 특정 문자 조합과 대응시키기 위해 사용되는 패턴

        .test()

        ```jsx
        var text = 'abc def'; // 대상 문자열
        var testReg = /abc/;  // 찾을 문자열
        var result = testReg.test(text);
        console.log(result); // true
        ```

        .match() 

        ```jsx
        var text = 'abc def'; // 대상 문자열
        var matchReg = /abc/; // 찾을 문자열
        var result = text.match(matchReg);
        console.log(match); // true
        ```

        .replace()

        ```jsx
        var text = 'abc def';    // 대상 문자열
        var replaceReg = /def/;  // 바꿀 대상 문자열
        var result = text.replace(replaceReg, 'ㄱㅏㄴㅏㄷㅏ');
        console.log(result);
        ```

- 수업 4 - DOM
    - DOM

        : HTML과 XML 문서에 대한 프로그래밍 인터페이스

        : 문서를 구성하는 객체에 어떻게 접근할 것인가를 정의하는 API

    - BOM

        : Browser Object Model 

        ```jsx
        /* BOM */
        /* Window */
        console.log(window.outerWidth);
        console.log(window.name);

        window.open('http:www.daum.net');
        window.close(); // window.open으로 띄운 창만 닫을 수 있다.

        /* Location */
        location.href = 'http:www.daum.net'
        location.reload();

        /* History */
        history.back(); // 이전 히스토리로 돌아감
        history.forward(); // 다시 앞으로 
        history.go(1);

        /* Screen */
        screen.width;
        screen.availWidth;

        /* Navigator - 브라우저 정보 */
        navigator.userAgent;
        navigator.language;
        navigator.platform;
        ```

    - DOM 탐색

        ```jsx
        /* .getElementById() */
        console.log(document.getElementById('debug'));

        var debug = document.getElementById('debug'); //debug 아이디를 가진 아이템을 가져온다(유일).
        console.log(debug)

        var box = document.querySelector('.box'); // box 클래스 아이템 중 첫번재 아이템을 가져온다.
        var box2 = document.querySelectorAll('.box'); // box 클래스 아이템 모두를 Node list 형태로 가져온다.
        var debug2 = document.querySelector('#debug'); // debug 아이드를 가진 아이템을 가져온다.
        console.log(box)
        console.log(box2);
        console.log(debug2);
        ```

    - DOM 생성, 삽입, 제거

        ```jsx
        /* .createElement() */
        const div = document.createElement('div');
        div.style.border = "1px solid red";
        div.innerHTML = "hello!";
        document.body.appendChild(div);
        // Node.removeChild()
        // Node.replaceChild()
        // Node.insertBefore()
        // Node.hasChildNodes()
        ```

        ```jsx
        const span = document.createElement('span');
        const textNode = document.createTextNode('HI!!');
        span.appendChild(textNode);
        document.querySelector('#debug').appendChild(span);
        ```

        ```jsx
        /* .remove() */
        const debug3 = document.getElementById('debug');
        debug3.remove(); // 오호 옴총 간단하군!
        /* .removeChild() */
        const list = document.getElementById('list');
        list.removeChild(list.children[0]); // ul인 list 아래 두 li 중 첫 li 제거
        ```

    - 이벤트

        : 문서에서 element에 변화가 생기면서 발생하는 모든 사건

        : click, mouseover, load, mouseout, unload, change, submit, focus, blur, error, keypress, DOMContentLoaded, touchstart 등

        ![Kakao%20Track%20-%20Web%20Programming%20670ac952130a443584b7989f178379fa/_2021-03-25__5.17.04.png](Kakao%20Track%20-%20Web%20Programming%20670ac952130a443584b7989f178379fa/_2021-03-25__5.17.04.png)

- 수업 5 - 실습과제
