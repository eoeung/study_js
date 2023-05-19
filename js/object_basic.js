// 객체
// 중괄호로 작성
// key, value로 구성된 property가 들어감

/**
 * https://blog.naver.com/magnking/220966405605
 * 
 * property란?
 * property는 object를 위해서 데이터를 저장한다.
*/

// 슈퍼맨이라는 객체
const superman = {
    name: 'clark',
    age: 33
}

// Object - 접근, 추가, 삭제

// 1. 접근
//     1) .사용
console.log(superman.name); // 'clark'
//     2) []사용
console.log(superman["age"]); // 33
console.log('----------------------------');

// 2. 추가
//     1) .사용
superman.gender = 'male';
//     2) []사용
superman['hairColor'] = 'black';
console.log(superman);
console.log('----------------------------');

// 3. 삭제
// delete 키워드 사용
delete superman.hairColor;
console.log(superman);
console.log('----------------------------');

// Object - 단축 프로퍼티
const name2 = 'clark';
const age2 = 33;

const superman2 = {
    name2, // name: name2,
    age2, // age: age2,
    gender2: 'male'
}
console.log(superman2);
// property 존재 여부 확인
console.log(superman2.birthday); // 없는 property인 경우, undefined

// in 연산자로 key값이 있는지 없는지 확인이 가능
console.log('birthday' in superman); // false
console.log('age' in superman); // true
console.log('----------------------------');