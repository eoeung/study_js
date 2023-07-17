// 화살표 함수

// 기존에 사용하던 함수 -> function 키워드 이용
const sayHello = function(name){
    const msg = `Hello, ${name}`;
    console.log(msg);
}
sayHello("Mike"); // Hello, Mike
console.log('----------------------------');

// 화살표 함수
// function 키워드를 지우고, => 사용
const sayHello2 = (name) => {
    const msg = `Hello, ${name}`;
    console.log(msg);
}
sayHello2("Tom"); // Hello, Tom
console.log('----------------------------');

// 인수가 하나일 경우, 기본 화살표 함수
const sayHello3 = (name) => {
    return `Hello, ${name}`;
}
console.log(sayHello3("Jane")); // Hello, Jane
console.log('----------------------------');

// 인수가 하나일 경우, 간단하게 작성한 화살표 함수
// 인수가 하나라면 (name)을 중괄호 없이 name이라고 작성해도 됨
const sayHello4 = name => {
    return `Hello, ${name}`;
}
console.log(sayHello4("Moon")); // Hello, Moon
console.log('----------------------------');

// 인수가 없는 경우
const sayHello5 = () => {
    return `Hello, World!`;
}
console.log(sayHello5()); // Hello, World!
console.log(sayHello5("abc")); // Hello, World!
// 인수를 받지 않는 함수에 인수를 넣어도 에러는 발생하지 않음
console.log('----------------------------');

// 다른 예시
// 기존 함수
const add1 = function(num1, num2){
    const result = num1 + num2;
    return result;
}
console.log(add1(1, 2)); // 3
console.log('----------------------------');

// 화살표 함수로 변환
const add2 = (num1, num2) => {
    const result = num1 + num2;
    return result;
}
console.log(add2(10, 20)); // 30
console.log('----------------------------');

// return문 밖에 없는 함수
const add3 = (num1, num2) => {
    return num1 + num2;
}
console.log(add3(100, 200)); // 300
console.log('----------------------------');

// return 안쓰고 작성
const add4 = (num1, num2) => {
    num1 + num2;
}
console.log(add4(1000, 2000)); // undefined
console.log('----------------------------');

// return문이 한 줄일 경우
const add5 = (num1, num2) => num1 + num2;
console.log(add5(10000, 20000)); // 30000
console.log('----------------------------');