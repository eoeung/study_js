// 표준 내장 객체(Standard Built-in Object): Javascript가 우리에게 제공하는 객체
/**
 * Object
 * Function
 * Array
 * String
 * Boolean
 * Number
 * Math
 * Date
 * RegExp
 */

// Javascript가 동작하는 호스트 환경에 따라 더 제공할 수도 있음

// 사용자 정의 객체: 사용자가 직접 정의해서 사용하는 객체
// ↔ 표준 내장 객체와 반대대는 용어임

// 표준 내장 객체와 사용자 정의 객체를 같이 사용할 수도 있음
// Ex) 표준 내장 객체를 기본으로 한 사용자 정의 객체

console.log('----------------------------');

// 배열의 확장
// 배열의 값 중 무작위로 하나의 값을 가져오는 함수 생성
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');

function getRandomValueFromArray(arr){
    var index = Math.floor(arr.length*Math.random()); // 0부터 arr.length-1까지 index를 가지고 오면 됨

    return arr[index];
}

console.log(getRandomValueFromArray(arr)); // arr 배열의 요소 중 랜덤값

// console.log(Math.random()); // Math.random()은 0(포함)과 1(제외) 사이의 부동 소수점 의사 난수를 반환함

console.log('----------------------------');

// 모든 배열 객체에서 사용할 수 있도록 수정
// 배열 객체의 원형에 random이라는 메소드를 추가해준다.
// 배열 객체인 Array와 prototype을 사용
// → 배열 생성자를 통해서 만들어진 객체가 random이라는 메소드를 가질 수 있게 설정한다.
Array.prototype.random = function(){
    var index = Math.floor(this.length*Math.random());
    return this[index];
}
// random()이라는 메소드안에서 this는 배열 객체 자체를 가리킴
// → new Array()를 통해 생성한 배열 객체, 그 자체가 this가 된다.
// 위의 예제처럼 argument를 받을 필요가 없이 this라고 써주면 된다.

var arr200 = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');

console.log(arr.random()); // arr 배열의 요소 중 랜덤값
console.log(arr200.random()); // arr200 배열의 요소 중 랜덤값