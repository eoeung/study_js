// 계산된 프로퍼티(Computed property)

let a = 'age';

// 일반적인 객체 생성
const user = {
    name: 'Mike',
    age: 30
}
console.log(user); // { name: 'Mike', age: 30 }
console.log('============================');

// [변수]
const user2 = {
    name: 'Mike',
    [a]: 30 // age: 30
}
console.log(user2); // { name: 'Mike', age: 30 }
console.log('============================');

// 그냥 a라고 하면 a가 property가 됨
const user3 = {
    name: 'Mike',
    a: 30 // a: 30
}
console.log(user3); // { name: 'Mike', a: 30 }
console.log('----------------------------');

// 대괄호 안에서 연산가능
const user4 = {
    [1+4]: 5,
    ["안녕"+"하세요"]: "Hello"
}
console.log(user4); // { '5': 5, '안녕하세요': 'Hello' }
console.log('----------------------------');