// brackets를 사용하는 예제
let n = "name";
let a = "age";

const user = {
    [n]: "Mike",
    [a]: 30,
    [1 + 4]: 5,
};

console.log(user); // { '5': 5, name: 'Mike', age: 30 }
console.log('----------------------------');

// 어떤 값이 key가 될지 모르는 경우의 예제 
function makeObj(key, val){
    return {
        [key]: val
    }
}

const obj = makeObj('나이', 33);
const obj2 = makeObj('성별', 'male');
console.log(obj); // { '나이': 33 }
console.log(obj2); // { '성별': 'male' }
console.log('----------------------------');

// Object method 예제
// Object.assign()
const user1 = {
    name: "Mike",
    age: 30,
};

const user2 = user1;
user2.name = "Tom";

console.log(user1); // { name: 'Tom', age: 30 }
console.log(user2); // { name: 'Tom', age: 30 }
// user1와 user2 모두 같은 객체를 바라보고 있음(같은 객체를 참조 중임)
// user2.name만 변경했지만, 결국 같은 객체를 바라보기 때문에 user1.name도 변경된 것임
console.log('============================');

const user3 = {
    name: "Mike",
    age: 30,
};

const user4 = Object.assign({}, user3); // 초기값, 덮어씌울 값
// 초기값에 덮어씌울 값이 들어가게 됨
user4.name = 'Jane';
console.log(user3); // { name: 'Mike', age: 30 }
console.log(user4); // { name: 'Jane', age: 30 }
console.log('----------------------------');

// Object.keys()
const user5 = {
    name: 'Mike',
    age: 30,
};

const keys = Object.keys(user5);
console.log(keys); // [ 'name', 'age' ]
console.log('============================');

// Object.values()
const values = Object.values(user5);
console.log(values); // [ 'Mike', 30 ]
console.log('============================');

// Object.entries()
const entries = Object.entries(user5);
console.log(entries); // [ [ 'name', 'Mike' ], [ 'age', 30 ] ]
console.log('============================');

// Object.fromEntries()
let arr = [
    ['mon', '월'],
    ['tue', '화'],
];

const result = Object.fromEntries(arr);
console.log(result); // { mon: '월', tue: '화' }
console.log('----------------------------');