// 정규표현식
// 컴파일 단계, 실행 단계로 나뉨
// 추출, test, 치환

// 컴파일: 검출하고자 하는 패턴을 만드는 것
let pattern = /a/;
let pattern2 = new RegExp('a');

// pattern.exec(string);
// 패턴이 존재하면, 해당 결과를 배열로 반환
console.log(pattern.exec('abcde')); // ["a"]
console.log(pattern.exec('bcdef')); // null
console.log('============================');

let pattern3 = /a./;
console.log(pattern3.exec('abcde')); // ["ab"]
console.log('----------------------------');

// pattern.test(string);
// 패턴이 존재하면, boolean으로 반환
// 패턴의 존재 유무를 확인할 때 사용
console.log(pattern.test('abcde')); // true
console.log(pattern.test('bcdef')); // false
console.log('----------------------------');

// 문자열 정규표현식
// str.match(pattern)
// 패턴에 해당하는 문자를 배열로 반환
let pattern4 = /a/;
let str = 'abcdef';
let str2 = 'bcdef';
console.log(str.match(pattern)); // ["a"]
console.log(str2.match(pattern)); // null
console.log('----------------------------');

// str.replace(pattern, 바꿀 문자열);
console.log(str.replace(pattern, 'A')); // Abcdef
console.log('----------------------------');

// ()와 $사용
// (): grouping
// $: 그룹화된 순서대로 1부터 인덱스를 부여
// 아래 예제는 그룹이 2개가 있다.
// 첫 번째 그룹: 처음 나오는 (\w+)
// 두 번째 그룹: \s 다음에 있는 (\w+)
let pattern5 = /(\w+)\s(\w+)/;
let str3 = 'coding everybody';
let result = str3.replace(pattern5, '$2,$1');
let result2 = str3.replace(pattern5, '$2, $1');
console.log(result); // everybody,coding
console.log(result2); // everybody, coding
console.log('----------------------------');

// 실제 예제
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result3 = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result3);
console.log('----------------------------');