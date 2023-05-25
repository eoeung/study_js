// str.trim(): 앞 뒤 공백 제거
let desc = " coding        ";

console.log(desc.trim()); // "coding"
console.log('----------------------------');

// str.repeat(n): 문자를 n번 반복
let hello = "hello!";

console.log(hello.repeat(3)); // hello!hello!hello!
console.log('----------------------------');

// 문자열 비교
console.log(1 < 3); // true
console.log("a" < "c"); // true
// ASCII에 의거, "a" = 97, "c" = 99
console.log("가" < "나"); // true
console.log('============================');

// str.codePointAt()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

// str.codePointAt(pos)
// pos: code point 값을 반환할 문자열의 요소 위치
// 지정된 위치의 유니코드 코드 포인트 값인 음수가 아닌 정수를 반환

console.log("a".codePointAt(0)); // 97
// 0번째 인덱스에 있는 문자열의 요소("a")의 code point를 구한다.
console.log("가나다".codePointAt(1)); // 45208
// 1번째 인덱스에 있는 문자열의 요소("나")의 code point를 구한다.
console.log('============================');

// String.fromCodePoint()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint

// String.fromCodePoint(num1)
// String.fromCodePoint(num1, num2)
// String.fromCodePoint(num1, num2, /* …, */ numN)
// num1, ..., numN: 일련의 code point
// 지정된 코드 포인트 시퀀스를 사용하여 생성된 문자열을 반환

console.log(String.fromCodePoint(97)); // "a"
// 97에 해당하는 code point 시퀀스를 사용하여 생성된 문자열("a")를 반환
console.log(String.fromCodePoint(45208)); // "나"
// 45208에 해당하는 code point 시퀀스를 사용하여 생성된 문자열("나")를 반환
console.log('----------------------------');

// 예제
// 숫자는 제외하고 문자만 출력하기
let list = [ // 배열
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

let newList = [];

for(let i=0; i<list.length; i++){
    newList.push(
        list[i].slice(4)
    );
}

console.log(newList); // [ '들어가며', 'JS의 역사', '자료형', '함수', '배열' ]
console.log('----------------------------');

// 금칙어: 콜라로 주어진 함수 생성
function hasCola(str){
    if(str.indexOf('콜라')){
        console.log('금칙어가 있습니다.');
    } else{
        console.log('통과');
    }
}

hasCola('와 사이다가 짱이야!'); // 금칙어가 있습니다.
// str.indexOf('콜라') 의 결과가 -1로 나옴
// -> if(-1) -> true -> 금칙어가 있습니다.

hasCola('무슨 소리, 콜라가 최고지'); // 금칙어가 있습니다.
// str.indexOf('콜라') 의 결과가 7로 나옴
// -> if(7) -> true -> 금칙어가 있습니다.

hasCola('콜라'); // 통과
// str.indexOf('콜라') 의 결과가 0으로 나옴
// -> if(0) -> false -> 통과
// 함수를 수정해야함
console.log('============================');

// 수정한 함수
function hasCola2(str){
    if(str.indexOf('콜라') > -1){ // 'str.indexOf(text)'의 결과값이 -1보다 큰지 비교함
        console.log('금칙어가 있습니다.');
    } else{
        console.log('통과');
    }
}
hasCola2('와 사이다가 짱이야!'); // 통과
// str.indexOf('콜라') 의 결과가 -1로 나옴
// -> if(-1 > -1) -> false -> 통과

hasCola2('무슨 소리, 콜라가 최고지'); // 금칙어가 있습니다.
// str.indexOf('콜라') 의 결과가 7로 나옴
// -> if(7 > -1) -> true -> 금칙어가 있습니다.

hasCola2('콜라'); // 금칙어가 있습니다.
// str.indexOf('콜라') 의 결과가 0으로 나옴
// -> if(0 > -1) -> true -> 금칙어가 있습니다.
console.log('============================');

// str.includes(text)
// 문자가 있으면 true, 없으면 false 반환
// 문자가 있는지 없는지 만을 파악할 때 사용하면 좋음

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// String.prototype.includes()
// str.includes(searchString, position)

// 1) searchString: 이 문자열에서 찾을 다른 문자열(정규표현식 X)
// 2) position: searchString을 찾기 시작할 위치(default: 0)

function hasCola3(str){
    if(str.includes('콜라')){
        console.log('금칙어가 있습니다.');
    } else{
        console.log('통과');
    }
}

hasCola3('와 사이다가 짱이야!'); // 통과
// str.includes('콜라')의 결과값이 false
// -> 통과

hasCola3('무슨 소리, 콜라가 최고지'); // 금칙어가 있습니다.
// str.includes('콜라')의 결과값이 true
// -> 금칙어가 있습니다.

hasCola3('콜라'); // 금칙어가 있습니다.
// str.includes('콜라')의 결과값이 true
// -> 금칙어가 있습니다.
console.log('----------------------------');