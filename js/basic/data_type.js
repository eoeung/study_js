// 문자형
const name = "Mike";
const message = `My Name is ${name}`;
const message2 = "My Name is ${name}"; // ${name}이 그대로 출력됨
console.log(message);
console.log(message2);
console.log('----------------------------');

const message3 = `My Name is ${"Sam"}`;
console.log(message3);
console.log('----------------------------');

// 숫자형
const age = 30;
const PI = 3.14;
const x = 1/0;
const y = name/2;
console.log(x); // Infinity
console.log(y); // NaN (Not a Number)
console.log('----------------------------');

// boolean
const a = true;
const b = false;
console.log(name == "MIKE");
console.log(age > 10);
console.log('----------------------------');

// null, undefined
let age2;
let user = null;
console.log(age2); // undefined -> 변수를 선언만 하고 값을 할당하지 않은 경우
console.log(user); // null -> 존재하지 않음 // 아무 내용도 없음
console.log('----------------------------');

// typeof 연산자 -> 변수의 자료형 확인
const name10 = "Mike";
console.log(typeof 3); // number
console.log(typeof name10); // string
console.log(typeof true); // boolean
console.log(typeof "xxx"); // string
console.log(typeof null); // object -> 객체형 // null ≠ 객체
console.log(typeof undefined); // undefined
console.log(typeof 'a'); // string
console.log('----------------------------');

// 문자열 더하기
const xxx = "나는 ";
const yyy = " 입니다.";
console.log(xxx + name + yyy);
console.log('----------------------------');

const age10 = 50 // number
console.log(xxx + age10 + "살" + yyy);
console.log('----------------------------');