// 함수 선언문 vs 함수 표현식

// 함수 선언문 : 어디서든 호출 가능
/**
 * 호출할 수 있는 타이밍
 * JavaScript는 위에서 아래로 순차적으로 코드 실행
 * 인터프리터 언어
 *  */

// 함수 표현식 : 코드에 도달하면 생성

/**
 * Ex) 에러 발생
 * console.log(num); // num is not defined
 * num = 1; 
 */

/**
 * 1-1) 동작 -> 호출하는 부분이 아래에 있음
 * function sayHello(){
 *     console.log('Hello');
 * }
 * sayHello();
 */


/**
 * 1-2) 동작 -> 호출하는 부분이 위에 있음
 * sayHello();
 * function sayHello(){
 *     console.log('Hello');
 * }
 */ 

// How does it work????
/**
 * hoisting (호이스팅)
 * 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것
 * var : 호이스팅 시 undefined로 변수를 초기화
 * let, const : 호이스팅 시 변수를 초기화 하지 않음
 * 선언만 호이스팅 대상이 됨
 * 
 * https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html
 * var 변수 선언과 함수 선언문 에서만 호이스팅이 발생
 * 선언만 JavaScript Parser에 의해 위로 끌어 올려지며, 할당은 끌어올려지지 않음
 * let/const 변수 선언과 함수 표현식에서는 호이스팅이 발생하지 않음
 */

// 함수 선언문
showError(); // "error"

function showError(){
    console.log('error');
}
// 함수를 호출하는 코드를 먼저 작성해도(함수를 선언하기 전에 호출을 먼저 했을 때도) hoisting에 의해 호출이 된다.
console.log('----------------------------');

// 함수 표현식
// showError2(); // ReferenceError: Cannot access 'showError2' before initialization

// let showError2 = function(){
//     console.log('error');
// }
// 함수 표현식은 함수를 호출하는 코드를 먼저 작성하면, 아직 함수는 초기화가 되지 않았기 때문에 에러 발생
/**
 * https://developer.mozilla.org/ko/docs/Glossary/Hoisting
 * 호이스팅을 설명할 땐 주로 "변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮기는" 것으로 말하곤 합니다.
 * 따라서 변수를 정의하는 코드보다 사용하는 코드가 앞서 등장할 수 있습니다.
 * 다만 선언과 초기화를 함께 수행하는 경우, 선언 코드까지 실행해야 변수가 초기화된 상태가 됨을 주의하세요.
 *  */
console.log('----------------------------');

showError3(); // ReferenceError: Cannot access 'showError3' before initialization

var showError3 = function(){
    console.log('error');
}
// 위 코드는 아래와 같다.
// var showError3;
// showError3();

// showError3 = function(){
//     console.log('error');
// }
console.log('----------------------------');