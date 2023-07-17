// Object.keys(): 키 배열 반환

const user = {
    name: 'Mike',
    age: 30,
    gender: 'male',
};

console.log(Object.keys(user)); // [ 'name', 'age', 'gender' ]
// 객체의 key들을 배열로 반환해줌
console.log(typeof(Object.keys(user))); // object
console.log('----------------------------');

// Object.values(): 값 배열 반환
console.log(Object.values(user)); // [ 'Mike', 30, 'male' ]
// 객체의 value에 해당하는 값을 배열로 반환
console.log(typeof(Object.values(user))); // object
console.log('----------------------------');

// Object.entries(): 키/값 배열 반환
console.log(Object.entries(user)); // [ [ 'name', 'Mike' ], [ 'age', 30 ], [ 'gender', 'male' ] ]
// key,value를 쌍으로 묶어서 배열로 반환해줌
// 하나의 배열 안에 각각의 key,value로 묶인 배열이 존재
console.log(typeof(Object.entries(user))); // object
console.log('----------------------------');

// Object.fromEntries(): 키/값 배열을 객체로 변환
const arr = 
[
    ["name", "Mike"],
    ["age", 30],
    ["gender", "male"],
];

console.log(Object.fromEntries(arr)); // { name: 'Mike', age: 30, gender: 'male' }
// key,value를 쌍으로 묶은 배열을 매개변수로 하여 객체로 변환시켜줌
console.log(typeof(Object.fromEntries(arr))); // object
console.log('----------------------------');