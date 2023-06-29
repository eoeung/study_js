// String: 문자형
// '', "", ``
// ''와 ""은 큰 차이가 없지만 아래 코드의 상황에서는 구분해서 쓰는 것이 편리함

// ''(single quotation marks): html코드
let html = '<div class="box_title">제목 영역</div>';
// html attribute를 작성할 때는 ""를 사용하기 때문에, ''로 감싸주는 것이 편리하다.

console.log(html); // <div class="box_title">제목 영역</div>
console.log('============================');

// ""(double quotation marks): 영어
let desc = "It's 3 o'clock";
// 영어에서 '(apostrophe)를 자주 사용하므로 ""로 감싸주는 것이 편리하다.

console.log(desc); // It's 3 o'clock
console.log('============================');

// ``(backtick)
// 1) $와 {}를 이용해 변수 표현
let name = 'Mike';
let result = `My name is ${name}.`;

console.log(result); // My name is Mike.

// 2) $와 {}를 이용한 표현식
let add = `2 더하기 3은 ${2+3}입니다.`;

console.log(add); // 2 더하기 3은 5입니다.
console.log('============================');

// 3) 여러 줄
let desc2 = `오늘은 맑고 화창한
날씨가 계속 되겠습니다.
내일은 비 소식이 있습니다.`;

console.log(desc2);
// 오늘은 맑고 화창한
// 날씨가 계속 되겠습니다.
// 내일은 비 소식이 있습니다.
console.log();

let desc3 = '오늘은 맑고 화창한\n날씨가 계속 되겠습니다.';

console.log(desc3);
// 오늘은 맑고 화창한
// 날씨가 계속 되겠습니다.

// let desc4 = '오늘은 맑고 화창한
// 날씨가 계속 되곘습니다.
// 내일은 비 소식이 있습니다.'; // SyntaxError: Invalid or unexpected token

// let desc5 = "오늘은 맑고 화창한
// 날씨가 계속 되곘습니다.
// 내일은 비 소식이 있습니다."; // SyntaxError: Invalid or unexpected token
console.log('----------------------------');

// length: 문자열 길이
let desc6 = '안녕하세요.';

console.log(desc6.length); // 6
console.log('----------------------------');

// str[index]: 인덱스로 특정 위치에 접근
let str = "Hello World!";

console.log(str[0]); // "H"
console.log(str[5]); // " "
console.log(str[5].length); // 1
console.log('============================');

// * 하지만, 배열과 다르게 한 글자만 바꾸는 것은 허용되지 않음
let str2 = "체크체크체크";
str2[0] = "옹";

console.log(str2); // 체크체크체크
// 인덱스로 접근하여 맨 앞의 문자를 체->옹으로 변경하려 했으나, log를 찍어보니 변화가 없음
console.log('----------------------------');

// str.toUpperCase(): 모든 영문을 대문자로 변경
// str.toLowerCase(): 모든 영문을 소문자로 변경
let str3 = "Hi guys. Nice to meet you.";

console.log(str3.toUpperCase()); // "HI GUYS. NICE TO MEET YOU."
console.log(str3.toLowerCase()); // "hi guys. nice to meet you."
console.log('----------------------------');

// str.indexOf(text): 인자를 받아, 해당 문자열에 인자를 받은 문자가 몇 번째 인덱스에 위치하는지 알려줌
let str4 = "Hi guys. Nice to meet you."

console.log(str4.indexOf('to')); // 14
console.log(str4.indexOf('man')); // -1

// ※ 주의점
// 맨 처음 인덱스는 0이기 때문에, 아래 상황처럼 boolean형으로 만드는 경우 조심해야함

// 잘못된 예제
if(str4.indexOf('Hi')){ // 0을 반환하므로 false가 되어버림
    console.log('Hi가 포함된 문장입니다.');
}

// 올바른 예제
if(str4.indexOf('Hi') > -1){ // 없는 문자라면 -1을 반환하므로, -1보다 크게 설정하면 무조건 있다는 말이 됨
    console.log('Hi가 포함된 문장입니다.');
}
console.log('---------------------------- str.slice() 시작');

// str.slice(n, m): 특정 범위의 문자열만 자르기

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice

// str.slice(beginIndex[, endIndex])

// 1) beginIndex: 추출 시작점인 0부터 시작하는 인덱스
// * 만약 음수라면, beginIndex는 str.length + beginIndex로 취급됨
// ** beginIndex가 str.length보다 크거나 같으면 slice()는 빈 문자열을 반환

// 2) endIndex: 0부터 시작하는 추출 종료점 인덱스로 그 직전까지 추출됨
// * 인덱스 위치의 문자는 추출에 포함되지 않음
// ** endIndex가 생략되면 문자열 마지막까지 추출함
// *** 만약 음수라면, endIndex는 str.length + endIndex로 취급됨

// 3) return: 문자열의 추출된 부분을 담는 새로운 문자열 반환

// * NaN 인수는 0으로 처리하지만, 음수 값이 지정되면 문자열 끝에서 거꾸로 계산하여 인덱스를 찾음

let str5 = "abcdefg";

console.log(str5.length); // 7
console.log('============================');

// 1. beginIndex만 있는 경우
//   1) 양수
console.log(str5.slice(2)); // "cdefg"
// beginIndex = 2 -> 2인덱스 부터 시작
console.log('============================ //   1) 양수 종료');

//   2) 음수
console.log(str5.slice(-2)); // "fg"
// str.length + beginIndex -> 7 + (-2) = 5인덱스 부터 시작
console.log('============================ //   2) 음수 종료');

//   3) str.length보다 크거나 같은 경우
console.log(str5.slice(7)); // ""
console.log(str5.slice(7).length); // 0
// str.length인 7과 크거나 같으므로 빈 문자열 반환
console.log('============================ //   3) str.length보다 크거나 같은 경우 종료');
console.log('============================ // 1. beginIndex만 있는 경우 종료');

// 2. beginIndex, endIndex 모두 있는 경우
//   1) beginIndex, endIndex 모두 양수인 경우
//     (1) beginIndex < endIndex (보통 사용)
console.log(str5.slice(0, 5)); // "abcde"
// beginIndex = 0 -> 0인덱스 부터 시작
// endIndex = 5 = (5-1) -> 4인덱스 까지 추출
// -> 인덱스 위치의 문자는 추출에 포함되지 않음
console.log('≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //     (1) beginIndex < endIndex (보통 사용) 종료');

//     (2) beginIndex > endIndex
console.log(str5.slice(5, 0)); // ""
console.log(str5.slice(5, 0).length); // 0
// beginIndex가 endIndex보다 크므로 빈 문자열을 반환
console.log('≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //     (2) beginIndex > endIndex 종료');
console.log('============================ //   1) beginIndex, endIndex 모두 양수인 경우 종료');

//   2) beginIndex는 음수, endIndex는 양수인 경우
console.log(str5.slice(-4, 5)); // "de"
// beginIndex = -4 = 7 + (-4) -> 3인덱스 부터 시작
// endIndex = 5 = (5-1) -> 4인덱스 까지 추출
console.log('============================ //   2) beginIndex는 음수, endIndex는 양수인 경우 종료');

//   3) beginIndex는 양수, endIndex는 음수인 경우
console.log(str5.slice(2, -2)); // "cde"
// beginIndex = 2 = 2인덱스 부터 시작
// endIndex = -2 = 7 + (-2) = (5-1) -> 4인덱스 까지 추출
console.log('============================ //   3) beginIndex는 양수, endIndex는 음수인 경우 종료');

//   4) beginIndex, endIndex 모두 음수인 경우
//     (1) beginIndex < endIndex (보통 사용)
console.log(str5.slice(-5, -1)); // "cdef"
// beginIndex = -5 = 7 + (-5) -> 2인덱스 부터 시작
// endIndex = -1 = 7 + (-1) = (6-1) -> 5인덱스 까지 추출
console.log('≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //     (1) beginIndex < endIndex (보통 사용) 종료');

//     (2) beginIndex > endIndex
console.log(str5.slice(-1, -5)); // ""
console.log(str5.slice(-1, -5).length); // 0
// beginIndex가 endIndex보다 크므로 빈 문자열을 반환
console.log('≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //     (2) beginIndex > endIndex 종료');
console.log('============================ //   4) beginIndex, endIndex 모두 음수인 경우 종료');
console.log('============================ // 2. beginIndex, endIndex 모두 있는 경우 종료');
console.log('---------------------------- str.slice() 종료');
console.log('---------------------------- str.substring() 시작');

// str.substring(n, m): slice(n, m)과 동일한 기능이지만 n과 m을 바꿔도 동작함

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

// substring(indexStart)
// substring(indexStart[, indexEnd])
// -> indexStart에서 indexEnd를 포함하지 않는 문자열을 추출

// 1) indexStart: 반환된 하위 문자열에 포함할 첫 번째 문자의 인덱스
// 2) indexEnd: 반환된 하위 문자열에서 제외할 첫 번째 문자의 인덱스
// 3) return: 주어진 문자열의 지정된 부분을 포함하는 새 문자열

// * indexEnd가 생략된 경우, 문자열 끝까지 문자를 추출
// ** indexStart가 indexEnd와 같으면 빈 문자열 반환
// *** indexStart가 indexEnd보다 크면 두 인수가 스왑된 것과 같음
// **** 0보다 작거나(음수) str.length보다 큰 인수 값은 각각 0과 str.length인 것처럼 처리됨
// **** indexStart나 indexEnd인수 중 하나 또는 둘 다 음수이거나 NaN인 경우, 인수를 0인 것처럼 처리합니다.

let str6 = "abcdefg";

// 1. indexStart만 있는 경우
//   1) 양수
console.log(str6.substring(1)); // "bcdefg"
// indexStart = 1 -> 1인덱스 부터 시작
console.log('============================ //   1) 양수 종료');

//   2) 음수
console.log(str6.substring(-3)); // "abcdefg"
// indexStart = -3 -> substring()은 음수 인자는 0으로 처리되어 str.substring(0)과 같은 효과임
console.log('============================ //   2) 음수 종료');

//   3) str.length보다 크거나 같은 경우
console.log(str6.substring(10)); // ""
console.log(str6.substring(10).length); // 0
// indexStart = 10 -> str.length보다 크거나 같기 때문에 빈 문자열을 반환
console.log('============================ //   3) str.length보다 크거나 같은 경우 종료');
console.log('============================ // 1. indexStart만 있는 경우 종료');

// 2. IndexStart, indexEnd 모두 있는 경우
//   1) indexStart, indexEnd 모두 양수인 경우
//     (1) indexStart < indexEnd (보통 사용)
console.log(str6.substring(2, 5)); // "cde"
// indexStart = 2 -> 2인덱스 부터 시작
// endIndex = 5 = (5-1) -> 4인덱스 까지 추출
// -> 인덱스 위치의 문자는 추출에 포함되지 않음
console.log('≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //     (1) indexStart < indexEnd (보통 사용) 종료');

//     (2) indexStart > indexEnd
console.log(str6.substring(5, 2)); // "cde"
// indexStart가 indexEnd보다 크므로 스왑효과 적용 -> indexStart가 2, indexEnd가 5가 됨
console.log('≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //     (2) indexStart > indexEnd 종료');
console.log('============================ //   1) indexStart, indexEnd 모두 양수인 경우 종료');

//   2) indexStart는 양수, indexEnd는 음수인 경우
console.log(str6.substring(5, -1)); // "abcde"
// indexStart = 5
// endIndex = -1 = 0 -> 음수 인자는 0으로 처리됨
// indexStart가 indexEnd보다 크므로 스왑효과 적용 -> indexStart가 0, indexEnd가 5가 됨
console.log('============================ //   2) indexStart는 양수, indexEnd는 음수인 경우 종료');

//   3) indexStart는 음수, indexEnd는 양수인 경우
console.log(str6.substring(-2, 4)); // "abcd"
// indexStart = -2 = 0 -> 음수 인자는 0으로 처리됨
// endIndex = 4 -> 4인덱스 까지 추출
// indexStart가 indexEnd보다 크므로 스왑효과 적용 -> indexStart가 0, indexEnd가 5가 됨
console.log('============================ //   3) indexStart는 음수, indexEnd는 양수인 경우 종료');

//   4) indexStart, indexEnd 모두 음수인 경우
//     (1) indexStart < indexEnd (보통 사용)
console.log(str6.substring(-4, -1)); // ""
console.log(str6.substring(-4, -1).length); // 0
// indexStart = -4 = 0 -> 음수 인자는 0으로 처리됨
// indexEnd = -1 = 0 -> 음수 인자는 0으로 처리됨
// indexStart가 indexEnd와 같으므로 빈 문자열 반환
console.log('≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //     (1) indexStart < indexEnd (보통 사용) 종료');

//     (2) indexStart > indexEnd
console.log(str6.substring(-1, -4)); // ""
console.log(str6.substring(-1, -4).length); // 0
// indexStart = -1 = 0 -> 음수 인자는 0으로 처리됨
// indexEnd = -4 = 0 -> 음수 인자는 0으로 처리됨
// indexStart가 indexEnd와 같으므로 빈 문자열 반환

console.log('≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //     (2) indexStart > indexEnd 종료');
console.log('============================ //   4) indexStart, indexEnd 모두 음수인 경우 종료');
console.log('============================ // 2. IndexStart, indexEnd 모두 있는 경우 종료');
console.log('---------------------------- str.substring() 종료');
console.log('---------------------------- str.substr() 시작');

// str.substr(n, m)

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr

// str.substr(start[, length])
// -> start 인덱스에서 카운트하여 문자열에서 length만큼의 문자를 추출

// 1) start: 추출하고자 하는 문자들의 시작 위치
// * 음수가 주어지는 경우, start = str.length + start의 값으로 취급됨
// -> start < 0인 경우, 인덱스는 문자열 끝부터 카운트하기 시작함. 이 경우, 문자열은 max(start + str.length, 0)에서 시작함
// ** start가 str.length보다 크거나 같으면 빈 문자열 반환
// *** start가 생략되거나 정의되지 않은 경우, 0으로 처리

// 2) length: 추출할 문자의 개수
// * length가 생략되거나 정의되지 않은 경우 또는 'start + length >= str.length'인 경우에는 문자열 끝까지 문자를 추출
/** 
 * Ex) let str = "Hello";
 *     str.length; // 5
 *     str.substr(0) 또는 str.substr(3, 5)
*/
// ** length < 0인 경우, 빈 문자열을 반환

// ※ start, length 모두 NaN은 0으로 처리

let str7 = "abcdefg";

// 1. start만 있는 경우
//   1) 양수
console.log(str7.substr(2)); // "cdefg"
// length가 생략되거나 정의되지 않은 경우에는 문자열 끝까지 문자를 추출
console.log('============================ //   1) 양수 종료');

//   2) 음수
console.log(str7.substr(-2)); // "fg"
// length가 생략되거나 정의되지 않은 경우에는 문자열 끝까지 문자를 추출
console.log('============================ //   2) 음수 종료');

//   3) str.length보다 크거나 같은 경우
console.log(str7.substr(10)); // ""
console.log(str7.substr(10).length); // 0
// start가 str.length보다 크거나 같으면 빈 문자열 반환
console.log('============================ //   3) str.length보다 크거나 같은 경우 종료');

// 2. start, length 모두 있는 경우
//   1) start, length 모두 양수인 경우
//     (1) start < length
console.log(str7.substr(2, 4)); // "cdef"
// start = 2 -> 2인덱스 부터 시작
// length = 4 -> 4개의 문자를 추출
console.log('≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //     (1) start < length 종료');

//     (2) start > length
console.log(str7.substr(4, 2)); // "ef"
// start = 4 -> 4인덱스 부터 시작
// length = 2 -> 2개의 문자를 추출
console.log('≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //     (2) start > length 종료');

//     (3) start + length >= str.length
console.log(str7.substr(5, 5)); // "fg"
// start = 5
// length = 5
// start + length = 10 >= 7 -> 'start + length >= str.length'인 경우에는 문자열 끝까지 문자를 추출
// -> 처음에 주어진 인덱스인 5인덱스 부터 문자열 끝까지 추출함
console.log('≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //     (3) start + length >= str.length 종료');
console.log('============================ //   1) start, length 모두 양수인 경우 종료');

//   2) start는 음수, length는 양수인 경우
// let str7 = "abcdefg";
//     (1) start + length <= str.length
console.log(str7.substr(-3, 2)); // "ef"
// start = -3 = 7 + (-3) = 4 -> start = str.length + start의 값으로 취급됨
// length = 2
// 4 + 2 <= 7 → 6 <= 7
// 'start + length >= str.length'가 아니므로 정상적으로 시작 인덱스에서 2개의 문자를 추출
console.log('≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //     (1) start + length <= str.length 종료');

//     (2) start + length >= str.length
console.log(str7.substr(-2, 5)); // "fg"
// start = -2 = 7 + (-2) = 5 -> start = str.length + start의 값으로 취급됨
// length = 5
// 5 + 5 >= 7 → 10 <= 7
// ∴ 'start + length >= str.length'인 경우에는 문자열 끝까지 문자를 추출
console.log('≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ //     (2) start + length >= str.length 종료');
console.log('============================ //   2) start는 음수, length는 양수인 경우 종료');

//   3) start는 양수, length는 음수인 경우
console.log(str7.substr(3, -2)); // ""
console.log(str7.substr(3, -2).length); // 0
// length < 0인 경우, 빈 문자열을 반환
// -> 음수 혹은 0개의 개수를 추출할 것이므로 그냥 추출을 안한다고 생각하면 됨
console.log('============================ //   3) start는 양수, length는 음수인 경우 종료');
console.log('---------------------------- str.substr() 종료');
console.log('----------------------------');