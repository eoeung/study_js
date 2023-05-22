// let
// const
// -> ES6부터 생겼음
// var

// var는 한 번 선언된 변수를 다시 선언할 수 있음
var name = "Mike";
console.log(name); // Mike
var name = "Jane";
console.log(name); // Jane

let name2 = "Mike";
console.log(name2); // Mike
// let name2 = "Jane"; // SyntaxError: Identifier 'name2' has already been declared
// console.log(name2);
console.log('----------------------------');

// var는 선언하기 전에 사용할 수 있음
console.log(name3); // undefined
var name3 = 'Mike';
console.log(name3); // Mike
console.log('============================');

// var가 실제로 동작할 때는 아래와 코드와 같이 동작함
// -> 호이스팅
var name4;
console.log(name4); // undefined
// -> 선언은 호이스팅이 되지만, 할당은 호이스팅이 되지 않음
name4 = 'Mike'; // 할당
console.log(name4); // Mike
console.log('----------------------------');

// let도 가능할까?
// -> let과 const도 호이스팅 됨
// 호이스팅: 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동

// console.log(name5); // ReferenceError: Cannot access 'name5' before initialization
// let name5 = 'Mike';

// --> 왜 Error가 발생할까?
// ==> Temporal Dead Zone (TDZ)
// let과 const는 TDZ의 영향을 받아서, 할당 되기 전에는 사용할 수 없음

// console.log(name6); // Temporal Dead Zone(TDZ)
const name6 = 'Mike'; // 변수 선언 및 할당
console.log(name6); // 사용 가능
// -> TDZ는 코드를 예측 가능하게 하고, 잠재적인 버그를 줄일 수 있는 장점이 있음

console.log('----------------------------');

// 호이스팅
// 문제 없음
let age = 30;
function showAge(){
    console.log(age);
}
showAge(); // 30

// 문제 발생
// let age2 = 30;
// function showAge2(){
//     console.log(age2); // ReferenceError: Cannot access 'age2' before initialization

//     let age2 = 20;
// }
// showAge2();

// --> 호이스팅은 scope 단위로 발생함
// showAge2() 함수 내부가 scope가 됨
// 호이스팅이 일어나지 않는다면, 바깥에서 선언한 let age2 = 30; 이 정상적으로 출력되어야 함
// 함수 내부로만 놓고 보면 이해가 쉬움
function showAge2(){
    console.log(age2);

    let age2 = 20;
}
// 여기에서 TDZ는 함수 내부가 됨
// let과 const는 TDZ의 영향을 받아, 할당 되기 전에는 사용할 수 없으므로 console.log(age2) 코드에서 에러가 발생함
console.log('----------------------------');

// 변수의 생성과정
// let
// 1) 선언 단계
// 2) 초기화 단계
//    * 초기화: undefined를 할당 해주는 단계
// 3) 할당 단계

// const
// 1) 선언 + 초기화 + 할당
//    * const는 값이 변하면 안되므로 선언과 동시에 할당이 이루어져야 함

// var
// 1) 선언 및 초기화 단계
//    * var는 선언과 초기화가 동시에 됨
// 2) 할당 단계

let name7;
name7 = 'Mike';

var age3;
age = 30;

// const gender; // SyntaxError: Missing initializer in const declaration
// -> 선언하면서 바로 할당을 하지 않았기 때문에 에러 발생
// gender = 'male';
console.log('----------------------------');

// scope
// let, const: 블록 스코프(block-scoped)
// 모든 코드 블록에서 선언된 변수는 코드블록 내에서만 유효하며, 외부에서는 접근할 수 없다는 의미
// 코드 블록 내에서 선언한 변수는 지역 변수가 되는 것임
// Ex) 함수, if문, for문, while문, try/catch문 등
function add(){
    // Block-level Scope
}
if(true){
    // Block-level Scope
}
for(let i=0; i<10; i++){
    // Block-level Scope
}

// var: 함수 스코프(function-scoped)
// 함수 내에서 선언된 변수만 그 지역 변수가 되는 것

const age4 = 30;
if (age4 > 19){
    var txt = '성인';
}
console.log(txt); // 성인
// -> if문 안에서 선언된 var로 선언한 변수가 if문 밖에서도 사용이 가능하다.

function add2(num1, num2){
    var result = num1 + num2;
}
add(2,3);
// console.log(result); // ReferenceError: result is not defined
// -> 함수 내에서 var로 선언된 변수는, 함수 바깥에서는 사용할 수 없음
// var로 선언한 변수는 유일하게 벗어날 수 없는 scope가 함수임
console.log('----------------------------');