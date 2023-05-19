// 전역 변수, 지역 변수
let msg = "welcome"; // 전역 변수
console.log(msg); // welcome

function sayHello(name){
    let msg = "Hello"; // 지역 변수
    console.log(msg + ' ' + name);
}

sayHello(); // Hello 
sayHello('Tom'); // Hello
console.log(msg); // welcome
console.log('----------------------------');

// 매개 변수로 받은 값은, 복사된 후 함수의 지역 변수가 된다.
// 전역 변수가 많아지면 관리가 힘들어지므로, 함수 사용시에는 지역 변수를 사용하는 습관을 들이자.

// OR 연산자 활용
function sayHello2(name){
    let newName = name || 'friend'; // name이 없을 경우, friend로 들어감
    let msg = `Hello, ${newName}`;
    console.log(msg);
}

sayHello2();
sayHello2('Jane');
console.log('----------------------------');

// default value
function sayHello3(name = 'friend'){ // name 값이 없을 경우, 기본 값이 friend임
    let msg = `Hello, ${name}`;
    console.log(msg);
}

sayHello3();
sayHello3('Mike');
console.log('----------------------------');

// return으로 값 반환
function add(num1, num2){
    return num1 + num2;
}

const result = add(2,3);
console.log('-------- 매개변수 부족 ----------');
console.log(add()); // NaN
console.log(add(1)); // NaN

console.log('-------- 빈 문자열 ----------');
console.log('빈 문자열 1개');
console.log(add("")); // undefined
console.log(add("").length); // 9
console.log('빈 문자열 2개');
console.log(add("", "")); // ""
console.log(add("", "").length); // 0

console.log('-------- 문자열 ----------');
console.log(add("안녕")); // 안녕undefined
console.log(add("안녕", "하세요")); // 안녕하세요
console.log(add("1")); // 1undefined
console.log(add("1", "2")); // 12

console.log('-------- boolean ----------');
console.log(add(true, true)); // 2
console.log(add(false, false)); // 0

console.log('-------- null ----------');
console.log(add(null)); // NaN
console.log(add(null, null)); // 0
// null은 강제로 0으로 반환한다고 함
// 그래서 null+null -> 0+0으로 됨

console.log('-------- undefined ----------');
console.log(add(undefined)); // NaN
console.log(add(undefined, undefined)); // NaN

console.log('-------- NaN ----------');
console.log(add(NaN)); // NaN
console.log(add(NaN, NaN)); // 0
// NaN의 연산은 모두 NaN의 연산으로 처리

console.log('-------- NaN ----------');
console.log(result); // 5
console.log('----------------------------');