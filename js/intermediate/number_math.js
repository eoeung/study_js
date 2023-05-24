// Number: 숫자
// Math: 수학

// toString()
// 10진수 -> 2진수/16진수
let num = 10;

console.log(typeof(num)); // number
console.log(num.toString()); // 10
// 10이라는 Number형을 String형으로 변환시켜줌
console.log(typeof(num.toString())); // string

console.log(num.toString(2)); // 1010
// toString()의 매개변수로 Number형이 입력되면, 입력된 Number형 값의 진수로 변환함
// -> 위의 예제에서는 2진수로 변환한 것임(10을 2진수로 나타낸 것)
console.log(typeof(num.toString(2))); // string

let num2 = 255;
console.log(num2.toString(16)); // ff
// 255라는 Number형 값을 16진수로 변환
console.log('----------------------------');

// Math
// Math.PI
console.log(Math.PI); // 3.141592653589793
console.log(typeof(Math.PI)); // number
console.log('============================');

// Math.ceil(): 소수점 상관없이 올림
// 소수점 첫째 자리에서 올림 -> 정수를 만들어줌
let num3 = 5.1;
let num4 = 5.7;

console.log(Math.ceil(num3)); // 6
console.log(Math.ceil(num4)); // 6
console.log('============================');

// Math.floor(): 소수점 상관없이 내림
// 소수점 첫째 자리에서 내림 -> 정수를 만들어줌
let num5 = 77.001;
let num6 = 77.911;

console.log(Math.floor(num5)); // 77
console.log(Math.floor(num6)); // 77
console.log('============================');

// Math.round(): 반올림
// 소수점 첫째 자리에서 반올림 -> 정수를 만들어줌
let num7 = 99.4999; // 99
let num8 = 99.5000; // 99

console.log(Math.round(num7)); // 99
console.log(Math.round(num8)); // 100
console.log('----------------------------');

// 소수점 자릿수 표현
// 요구사항: 소수점 둘째 자리까지 표현(셋째 자리에서 반올림)
let userRate = 30.1234;
let userRate2 = 30.6789;

// 1. 수학적으로 계산하기
// 1) 소수점 둘째 자리를 만들기 위해 100을 곱한다.
console.log(userRate*100); // 3012.34
console.log(userRate2*100); // 3067.89

// 2) 반올림을 해줌
console.log(Math.round(userRate*100)); // 3012
console.log(Math.round(userRate2*100)); // 3068

// 3) 소수점 둘째 자리를 맞춰주기 위해 100으로 나눠줌
console.log(Math.round(userRate*100) / 100); // 30.12
console.log(Math.round(userRate2*100) / 100); // 30.68
console.log('============================');

// 2. toFixed()
// -> toFixed(소수점 표현할 자리)
// 요구사항: 마찬가지로 소수점 둘째 자리까지 표현(셋째 자리에서 반올림)
// 그리고 String형으로 반환해줌
let userRate3 = 22.2222;
console.log(userRate3.toFixed(2)); // "22.22"

// * 소수점 표현할 자리를 0(정수만)으로 선언
console.log(userRate3.toFixed(0)); // "22"

// ** 숫자형이 가지고 있는 소수점보다 많은 경우
console.log(userRate3.toFixed(10)); // "22.2222000000"
// 기본적으로는 소수점보다 많은 경우, 남는 소수점 부분은 매개변수로 넣어준 소수점까지 모두 0으로 채워줌

// ** 숫자형이 가지고 있는 소수점보다 많은 경우
console.log(userRate3.toFixed(30)); // "22.222200000000000841282599139959"
// 모두 0으로 채워줄 것 같았으나 중간부터 0이 아닌 다른 값이 들어감 -> 부동소수점의 한계로 추측됨

// *** 음수를 넣는 경우
// console.log(userRate3.toFixed(-1)); // RangeError: toFixed() digits argument must be between 0 and 100
// 0에서 100사이의 값을 넣어야함
console.log('============================');

// ※ 주의점: String형으로 반환해줌
let origin_number = 99.9051;
let number = origin_number.toFixed(2); // 소수점 둘째 자리까지 변환
console.log(number); // 99.91
// toFixed()는 자체적으로 round기능이 있는 것으로 파악됨
// -> 99.9051에서 세 번째 자리인 5가 반올림 되면서 99.91이 반환됨

// https://www.freecodecamp.org/news/coercion-and-type-conversion-in-javascript/
// JavaScript는 오류를 발생시키는 대신 한 값의 유형을 다른 값의 유형에 맞게 강제하여 작업을 수행할 수 있도록 합니다.
console.log(number * 2); // 199.82
// -> toFixed()는 String, 2는 Number인데 정상적으로 값이 나왔다?
// -> Number값에 맞춰 toFixed()로 반환된 string타입이 강제로 number형으로 변환되어 연산이 가능했다.
console.log(number + 222); // 99.91222
// -> "99.91" + 222 연산이 되어서 결과적으로 "99.91" + "222"연산이 되어 99.91222가 반환된 것으로 보인다.
number = Number(origin_number.toFixed(2));
console.log(number + 222); // 321.90999999999997
// 더하기 연산은 성공적으로 되었으나, 값이 이상하게 나온다.
console.log(number + 100); // 199.91
// 더하기 연산이 성공적으로 되었음

console.log('----------------------------');

// isNaN(): NaN(Not a Number)인지 확인
let x = Number('x');
console.log(x); // NaN
console.log('============================');

// 동등 연산자, 일치 연산자로 확인
console.log(x == NaN); // false
console.log(x === NaN); // false
console.log(NaN == NaN); // false
// 모두 false가 나온다.
// -> NaN을 확인하는 유일한 방법은 isNaN()을 사용하는 방법이다.
console.log('============================');

// isNaN() 사용
console.log(isNaN(x)); // true
console.log(isNaN(3)); // false
console.log(isNaN(NaN)); // true
console.log('----------------------------');

// parseInt(): String형을 Number형으로 변환
let margin = '10px';

console.log(parseInt(margin)); // 10
console.log(Number(margin)); // NaN
// parseInt()와 Number()와 다른 점은 parseInt()는 문자가 혼용되어 있어도 동작함
console.log('============================');

// 숫자와 문자, 특수문자 등 복잡하게 되어있는 String형으로 실험
let test = '-+*abc2de하★3굿0fg99';
let test2 = '-+굿★123abcd__';
let test3 = '10px;';
let test4 = ';xp20';

// test
console.log(parseInt(test)); // NaN
console.log(Number(test)); // NaN
console.log('============================');

// test2
console.log(parseInt(test2)); // NaN
console.log(Number(test2)); // NaN
console.log('============================');

// test3
console.log(parseInt(test3)); // 10
console.log(Number(test3)); // NaN
console.log('============================');

// test4
console.log(parseInt(test4)); // NaN
console.log(Number(test4)); // NaN
// -> 맨 앞에 숫자가 있어야 인식되는 것으로 보임
// -> 숫자로 시작하지 않으면 NaN 반환
console.log('============================');

// 두 번째 인수로 진수를 변환할 수 있음
let redColor = 'f3';

console.log(parseInt(redColor)); // NaN
console.log(parseInt(redColor, 16)); // 243
// -> 두 번째 인수로 16을 주어, 16진수를 10진수로 변환하였음
console.log('============================');

// toString() vs parseInt()
// toString(): 10진수를 다른 진수로 변환
// parseInt(): 다른 진수를 10진수로 변환
// https://jae04099.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A7%84%EC%88%98%EB%B3%80%ED%99%98-toString-parseInt

let test5 = '11';

console.log(parseInt(test5, 2)); // 3
// 11이라는 2진수를 10진수로 변환 => 3
// 0011(2) = 3(10)
console.log('----------------------------');

// parseFloat(): 부동소수점을 반환
let padding = '18.5%';

console.log(parseInt(padding)); // 18
// 소수점 이하는 무시하고, 정수만 반환
console.log(parseFloat(padding)); // 18.5
// parseInt()와 동일하게 작동한다.
console.log('----------------------------');

// Math.random(): 0 ~ 1사이의 무작위 숫자 생성
console.log(Math.random); // [Function: random]
console.log(Math.random()); // 0.8016662189401866
console.log(Math.random()); // 0.2441784520057746
console.log(Math.random()); // 0.36101301750867854
// -> 실행할 때 마다 계속 값이 바뀜
console.log('============================');

// * 1~100 사이의 임의의 숫자를 뽑고 싶은 경우?
console.log(Math.floor(Math.random()*100)+1); // 1~100사이 무작위 숫자
// 1. Math.random() = 0.6789인 경우
//   1) Math.random()*100 = 67.89
//   2) Math.floor(Math.random()*100) = 67
//   3) Math.floor(Math.random()*100)+1 = 68

// 2. Math.random() = 0.00678인 경우
//   1) Math.random*100 = 0.6789
//   2) Math.floor(Math.random()*100) = 0
//   3) Math.floor(Math.random()*100)+1 = 1

// 3. Math.random() = 0.9987인 경우
//   1) Math.random*100 = 99.87
//   2) Math.floor(Math.random()*100) = 99
//   3) Math.floor(Math.random()*100)+1 = 100
console.log('----------------------------');

// Math.max(): 최대값
// Math.min(): 최소값
let arr = [1, 4, -1, 5, 10, 9, 5.54];

console.log(Math.max(arr)); // NaN
console.log(Math.max(1, 4, -1, 5, 10, 9, 5.54)); // 10
// 배열에서 최대값 뽑아오는 방법은?
// Array.prototype.reduce()
// https://miiingo.tistory.com/365

// map(), reduce()
// map(): 배열.map((요소, 인덱스, 배열) => { return 요소 });
// reduce(): 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
// https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d
console.log('============================');

console.log(Math.min(arr)); // NaN
console.log(Math.min(1, 4, -1, 5, 10, 9, 5.54)) // -1
console.log('----------------------------');

// Math.abs(): 절대값
console.log(Math.abs(-1)); // 1
console.log('----------------------------');

// Math.pow(n,m): 제곱
// n의 m제곱
console.log(Math.pow(2, 10)); // 1024
console.log('----------------------------');

// Math.sqrt(): 제곱근
// sqrt는 square root의 약자
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(2)); // 1.4142135623730951
console.log('----------------------------');