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
};

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
    name2, // name2: 'clark', -> name2라는 property : name2의 value
    age2, // age2: 33, -> age2라는 property : age2의 value
    gender2: 'male'
};
console.log(superman2);
// property 존재 여부 확인
console.log(superman2.birthday); // 없는 property인 경우, undefined

// in 연산자로 key값이 있는지 없는지 확인이 가능
console.log('birthday' in superman); // false
console.log('age' in superman); // true
console.log('----------------------------');

// 객체를 만드는 함수
function makeObject(name, age){
    return {
        name: name,
        age: age,
        hobby: 'football'
    }
}

const Mike = makeObject('Mike', 30);
console.log(Mike);
console.log('----------------------------');

// 객체를 만드는 함수(축약형)
function makeObject2(name, age){
    return {
        name,
        age,
        hobby: 'football33'
    }
}
const Mike2 = makeObject2('Mike2', 333);
console.log(Mike2);
console.log('----------------------------');

// in을 사용해서 내가 찾고싶은 property가 해당 객체 안에 존재하는지 체크
// 그다지 실용적이지 못한 예제이다?
console.log('age' in Mike2); // true
console.log('birthday' in Mike2); // false
console.log('----------------------------');

// 객체 in
function isAdult(user){ // 객체를 받아옴
    if(user.age < 20){
        return false;
    }
    return true;
}
// 위의 함수와 동일 -> else문을 굳이 써주지 않아도 됨
// function isAdult(user){
//     if(user.age < 20){
//         return false;
//     } else{
//         return true;
//     }
// }

const Tom = {
    name: 'Tom',
    age: 30
};

const Jane = {
    name: 'Jane'
};

console.log(isAdult(Tom)); // true
console.log(isAdult(Jane)); // true
// Jane이라는 객체는 age가 없음에도 불구하고, true가 반환됨
// -> isAdult함수 내부에서 (user.age < 20)이라는 조건이 false가 되면서 if문을 타지 않음으로 인해 발생하는 문제

// isAdult 함수 수정
function isAdult2(user){ // 객체를 받아옴
    if(!('age' in user) || user.age < 20){ // age라는 property가 없으면, 성인이 아니라고 판단해야함 // user에 age가 없거나, 20살 미만일 경우
        return false;
    }
    return true;
}
console.log(isAdult2(Tom)); // true
console.log(isAdult2(Jane)); // false
console.log('----------------------------');

// 객체 for ... in
const Moon = {
    name: "Moon",
    age: 500
};

for(x in Moon){ // x라는 변수는 Moon이 가지고 있는 property를 의미함
    console.log(x);
    // name
    // age
}
console.log('----------------------------');

// 객체에 접근하는 방법
// 1) [property]
for(x in Moon){
    console.log(Moon[x]);
    // "Moon"
    // 500
}
console.log('----------------------------');

// 2) .property
// Why??
// https://www.freecodecamp.org/news/dot-notation-vs-square-brackets-javascript/
// 점 표기법은 정적 키만 허용하지만 대괄호 표기법은 동적 키를 허용합니다.
// 여기에서 정적 키는 키가 직접 입력됨을 의미하고, 동적 키는 키가 표현식에서 평가됨을 의미합니다.
for(x in Moon){
    console.log(Moon.x);
    // undefined
    // undefined
}
console.log(Moon.age); // 500
// Moon.age는 값이 잘 나오나, for ... in 구문에서 호출하려고 하면 undefined 값이 나옴
console.log('----------------------------');