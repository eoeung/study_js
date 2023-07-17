// property key : 문자형 및
// 문자형으로 접근가능
const obj = {
    1: '1입니다.',
    false: '거짓',
};

console.log(obj); // { '1': '1입니다.', false: '거짓' }
console.log(Object.keys(obj)); // [ '1', 'false' ]
// key배열을 반환 받았는데, key들이 모두 문자형으로 변환되어 있음
console.log('============================');

// 문자형이 아니라 obj객체를 만들 때 만들었던 key(숫자형, boolean형)으로 접근
console.log(obj[1]); // 1입니다.
console.log(obj[false]); // 거짓

// 문자형으로 접근
console.log(obj['1']); // 1입니다.
console.log(obj['false']); // 거짓
console.log('----------------------------');

// Symbol: 유일한 식별자를 만들 때 사용
const a = Symbol(); // new를 절대 붙이지 않음!
const b = Symbol();

console.log(a); // Symbol()
console.log(b); // Symbol()
console.log(a == b); // false
// 동등연산자(자료형은 달라도 값만 똑같으면 됨)
console.log(a === b); // false
// 일치연산자(자료형, 값 모두 일치해야함)
console.log('============================');

// 동등연산자
console.log(1 == '1'); // true
// 일치연산자
console.log(1 === '1'); // false
console.log('============================');

// Symbol은 유일성을 보장함
const id = Symbol('id');
const id2 = Symbol('id');

console.log(id); // Symbol(id)
console.log(id2); // Symbol(id)
// 생긴 건 똑같음

console.log(id == id2); // false
console.log(id === id2); // false
// 그런데 일치하는 부분이 전혀 없음
console.log('----------------------------');

// property key: Symbol형
const id3 = Symbol('id');
const user6 = {
    name: 'Mike',
    age: 30,
    [id3]: 'myid', // computed property
};

console.log(user6); // { name: 'Mike', age: 30, [Symbol(id)]: 'myid' }
console.log(user6[id3]); // myid
console.log('============================');

console.log(Object.keys(user6)); // [ 'name', 'age' ]
console.log(Object.values(user6)); // [ 'Mike', 30 ]
console.log(Object.entries(user6)); // [ [ 'name', 'Mike' ], [ 'age', 30 ] ]
// 3가지 메소드 모두 [Symbol(id)]는 출력되지 않음
// key가 Symbol형인 property는 모두 건너뜀

for(let a in user6){
    console.log(a);
}
// name
// age
// for...in도 마찬가지로 건너뜀

// for(let a of user6){ // TypeError: user6 is not iterable
//     console.log(a);
// }

// for...of와 for...in의 차이
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of
// for...in => 객체의 모든 열거가능한 속성에 대해 반복
// for...of => 컬렉션(Collection) 전용
// Collections이란?
// https://velog.io/@yesdoing/JavaScript-Collections
// 프로그래밍 언어가 제공하는 값을 담을 수 있는 컨테이너
// -> 모든 객체보다는 [Symbol.iterator] 속성이 있는 모든 컬렉션 요소에 사용
/**
 * 예제
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7]; // 배열
iterable.foo = "hello";

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
} // 3,5,7,hello는 사실상 프로퍼티가 아니라 값이기 때문에 열거 가능한 프로퍼티가 아님

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
 * 
 */
// for...in
// for (const variable in object) {
//     statement
// }
// object에 사용

// for...of
// for (variable of iterable){
//     statement
// }
// iterable에 사용

// for...of vs for...in
// https://developerntraveler.tistory.com/122
// for...of문은 iterable을 순회하면서 iterable의 요소를 변수에 할당
// for...in문은 객체의 모든 property를 순회하며 열거함
// for...of와 for...in은 무언가를 반복하는데, 무엇을 반복하는지에 대한 차이점이 존재함
// for...in은 **객체의 열거 가능한property를 임의의 순서로 반복**하고, for...of는 **iterable 객체가 반복하도록 정의한 값을 반복**함
console.log('----------------------------');

// Symbol.for(): 전역 심볼
// 하나의 심볼만 보장받을 수 있음
// 없으면 만들고, 있으면 가져오기 때문
// Sysmbol함수는 매번 다른 Symbol값을 생성하지만, Symbol.for()메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
const id4 = Symbol.for('id');
const id5 = Symbol.for('id');
console.log(id4); // Symbol(id)
console.log(id5); // Symbol(id)

console.log(id4 == id5); // true
console.log(id4 === id5); // true

// Symbol.keyFor(): 이름을 얻고 싶을 경우 사용
// Symbol을 생성할 때 적어주었던 이름값을 가지고 옴
console.log(Symbol.keyFor(id4)); // id
console.log(Symbol.keyFor(id5)); // id
console.log('============================');

// 만약 Symbol값이 없을 경우에는?
const testSymbol = Symbol();
const testSymbol2 = Symbol.for();

console.log(testSymbol); // Symbol()
console.log(testSymbol2); // Symbol(undefined)

console.log(Symbol.keyFor(testSymbol)); // undefined
console.log(Symbol.keyFor(testSymbol2)); // undefined
console.log('----------------------------');

// 전역 심볼이 아닌 일반 심볼은 description으로 알 수 있음
// keyFor()메소드를 사용할 수 없음
const testId = Symbol('id 입니다.');
console.log(testId.description); // id 입니다.
console.log('----------------------------');

// 숨겨진 Symbol key 보는 방법
// Object.getOwnPropertySymbols(): Symbol Key만 볼 수 있음
const id99 = Symbol('id');
const user99 = {
    name: 'Mike',
    age: 30,
    [id99]: 'myid',
};

console.log(Object.getOwnPropertySymbols(user99)); // [ Symbol(id) ]
console.log('============================');

// Reflect.ownKeys(): Symbol형 Key를 포함한 객체의 모든 Key를 보여줌
console.log(Reflect.ownKeys(user99)); // [ 'name', 'age', Symbol(id) ]
console.log('----------------------------');

// 올바르지 않은 예제
// 다른 개발자가 만들어 놓은 객체
const user333 = {
    name: 'Mike',
    age: 30,
};

// 내가 작업
user333.showName = function(){};

// 사용자가 접속하면 보이는 메시지
for(let key in user333){
    console.log(`His ${key} is ${user333[key]}.`);
}
// His name is Mike.
// His age is 30.
// His showName is function(){}.
// 사용자가 이상한 메시지를 받게 된다.
console.log('============================');

// 올바른 예제
// 다른 개발자가 만들어 놓은 객체
const user555 = {
    name: 'Mike',
    age: 30,
};

// 내가 작업
// user555.showName = function(){};
const showName = Symbol('show name');
user555[showName] = function(){
    console.log(this.name);
};

user555[showName](); // Mike
console.log(typeof(user555[showName])); // function

// 사용자가 접속하면 보이는 메시지
for(let key in user555){
    console.log(`His ${key} is ${user555[key]}.`);
}
// His name is Mike.
// His age is 30.
// showName이 for...in문에 걸리지 않는다.
console.log(user555); // { name: 'Mike', age: 30, [Symbol(show name)]: [Function (anonymous)] }

console.log('----------------------------');