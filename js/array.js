// 배열
// 배열: 순서가 있는 리스트

// 배열의 특징
// 문자, 숫자, 객체, 함수 등도 포함할 수 있음
let arr = [
    '민수', // 문자
    3, // 숫자
    false, // boolean
    {
        name: 'Mike',
        age: 30,
    }, // 객체
    function(){
        console.log('TEST');
    }, // 함수
];

// 배열의 길이
console.log(arr.length); // 5
console.log('----------------------------');

for(x in arr){
    console.log(x);
}
// 0
// 1
// 2
// 3
// 4
console.log('----------------------------');

for(x in arr){
    console.log(arr[x]);
}
// 민수
// 3
// false
// { name: 'Mike', age: 30 }
// [Function (anonymous)]
console.log('----------------------------');

// push(): 배열 끝에 추가
let days = ['월', '화', '수'];
days.push('목');
console.log(days); // [ '월', '화', '수', '목' ]
console.log('----------------------------');

// pop(): 배열 끝 요소 제거
let days2 = ['월', '화', '수'];
days2.pop();
console.log(days2); // [ '월', '화' ]
console.log('----------------------------');

// unshift: 배열 제일 앞에 추가
// shift: 배열 제일 앞에 제거
let days3 = ['월', '화', '수'];
days3.unshift('일'); // unshift
console.log(days3); // [ '일', '월', '화', '수' ]
console.log('============================');

days3.shift(); // shift
console.log(days3); // [ '월', '화', '수' ]
console.log('----------------------------');

// shift, unshift 여러 요소
console.log(days3.unshift('금', '토', '일')); // 6
// 배열의 시작 부분에 지정된 요소를 추가하고, 배열의 새 길이를 반환
console.log(days3); // [ '금', '토', '일', '월', '화', '수' ]
console.log('============================');

days3.shift(); // [ '토', '일', '월', '화', '수' ]
console.log(days3);
console.log('----------------------------');

// 반복문 for
let days4 = ['월', '화', '수'];
for(let index=0; index<days4.length; index++){
    console.log(days4[index]);
}
// 월
// 화
// 수
console.log('----------------------------');

// 반복문 for ... of
// 객체를 순환하는 for ... in과 헷갈리면 안됨
// 배열도 객체기 때문에 for ... in이 가능하지만, 단점이 많으므로 권장하지 않음
let days5 = ['월', '화', '수'];
for(let day of days5){
    console.log(day);
}
// 월
// 화
// 수
// 바로 배열의 요소에 접근이 가능
console.log('============================');

for(let day in days5){
    console.log(day);
}
// 0
// 1
// 2
// 인덱스가 나온다.
console.log('============================');

for(let day in days5){
    console.log(days5[day]);
}
// 월
// 화
// 수
// 배열[인덱스]로 접근해줘야 요소가 나온다.
console.log('----------------------------');

// array example
let days6 = ['mon', 'tue', 'wed'];
// 배열[인덱스]로 접근
console.log(days6[1]); // tue

// 요소 값 수정
days6[1] = '화요일';
console.log(days6[1]); // 화요일

// 길이
console.log(days6.length); // 3

// 배열 맨 뒤에 값 추가
days6.push('thu');
console.log(days6); // [ 'mon', '화요일', 'wed', 'thu' ]

// 배열 맨 앞에 값 추가
days6.unshift('sun');
console.log(days6); // [ 'sun', 'mon', '화요일', 'wed', 'thu' ]
console.log('============================');

// for문으로 반복
for(let index=0; index<days6.length; index++){
    console.log(days6[index]);
}
// sun
// mon
// 화요일
// wed
// thu
console.log('============================');

// for ... of
for(let x of days6){
    console.log(x);
}
// sun
// mon
// 화요일
// wed
// thu
console.log('----------------------------');