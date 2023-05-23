// 객체에서 사용할 수 있는 메서드
// Object.assign(): 객체 복제
// Object.keys(): 키 배열 반환
// Object.values()
// Object.entries()
// Object.fromEntries()

// Object.assign() : 객체 복제
const user = {
    name: 'Mike',
    age: 30
};
console.log(user); // { name: 'Mike', age: 30 }

const cloneUser = user; // 참조값만 복사된다.
console.log(cloneUser); // { name: 'Mike', age: 30 }

user['hobby'] = 'Football'
console.log(cloneUser); // { name: 'Mike', age: 30, hobby: 'Football' }
// user에 hobby라는 프로퍼티를 추가했는데, cloneUser에도 적용되는 모습
console.log('============================');

// 동일하게 객체를 복제하기 위해서는 Object.assign()함수를 사용해야한다.
const newUser = Object.assign({}, user);
// 첫 번째 매개변수: 초기값(위의 예시에서는 빈 객체로 설정)
// 두 번째 매개변수에 있는 값이 초기값에 병합됨
// { } + {name : 'Mike', age: 30} = 
// {
//     name: 'Mike',
//     age: 30
// };

newUser.name = 'Tom';
console.log(newUser); // { name: 'Tom', age: 30, hobby: 'Football' }
// newUser의 내용을 바꿔도 user에는 영향을 미치지 않음
console.log(user); // { name: 'Mike', age: 30, hobby: 'Football' }
console.log('============================');

// 초기값에 gender라는 property를 설정
const newUser2 = Object.assign({gender: 'male'}, user);
console.log(newUser2); // { gender: 'male', name: 'Mike', age: 30, hobby: 'Football' }
// 기존 user가 가지고 있던 프로퍼티에 더해서 초기값으로 설정한 gender프로퍼티도 추가되었음
console.log('============================');

// 기존에 있는 프로퍼티의 key값이 같은 초기값을 매개변수로 넣어주는 경우
const newUser3 = Object.assign({name: 'Tom'}, user);
console.log(newUser3); // { name: 'Mike', age: 30, hobby: 'Football' }
// user에 있는 프로퍼티가 초기값을 덮어씌워버림 -> 초기값으로 지정해도 무의미함
console.log('============================');

// * 리터럴이란?
// https://tiboy.tistory.com/685
// 소스 코드의 고정된 값을 대표(변수의 형)하는 용어
// 변수의 형을 정하는 능력
// Ex) Array Literal, Object Literal, ...

// ** 후행 쉼표(Trailing commas or final commas)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas
// JavaScript는 처음부터 배열 리터럴에서 쉼표 뒤에 붙는 것을 허용했습니다. 이제 개체 리터럴, 함수 매개 변수, 명명된 가져오기, 명명된 내보내기 등에도 뒤에 오는 쉼표를 사용할 수 있습니다.
// 그러나 JSON은 뒤에 오는 쉼표를 모두 허용하지 않습니다.

// 객체 합치기
const user2 = {
    name: 'Moon', // name프로퍼티
};
const info1 = {
    age: 500,
    name: 'May', // name프로퍼티
};
const info2 = {
    gender: 'male',
    name: 'Baby', // name프로퍼티
}
const newUser4 = Object.assign(user2, info1, info2);
// info1과 info2를 user2에 합친다.
// name프로퍼티는 최종적으로 마지막 매개변수에 있는 값으로 들어간다.
console.log(newUser4); // { name: 'Baby', age: 500, gender: 'male' }
console.log('============================');

// Object.assign에 들어가는 매개변수 조정해보기
const user3 = {
    name: 'Moon', // name프로퍼티
};
const info3 = {
    age: 500,
    name: 'May', // name프로퍼티
};
const info4 = {
    gender: 'male',
    name: 'Baby', // name프로퍼티
}
const newUser5 = Object.assign(user3, info4, info3);
// name프로퍼티는 최종적으로 마지막 매개변수에 있는 값으로 들어간다.
// -> info3객체에 있는 name: May로 최종결정됨
console.log(newUser5); // { name: 'May', gender: 'male', age: 500 }
console.log('============================');

// Object.keys()


console.log('----------------------------');
