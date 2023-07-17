// Object API 사용법
// 모든 객체는 Object라고 하는 객체를 암시적으로 상속받고 있음 → Object가 부모

// Object의 prototype은 어떤 객체도 사용할 수 있다.
// 모든 객체가 어떤 기능을 사용할 수 있도록 하고 싶다면, Object의 prototype에 추가하면 된다.
// MDN 사이트의 javascript docs 보는 방법 설명

// Object.keys()
// prototype이 없는 경우, Object.keys()로 사용
// Ex) Object.keys(o)

// Object라고 하는 생성자 함수
// Object.keys = function(){...}

var arr = ["a", "b", "c"];
console.log('Object.keys(arr)', Object.keys(arr)); // Object.keys(arr) [ '0', '1', '2' ]
// 배열의 key를 가지고 오므로, index를 가지고 온다.

var o = {name: "egoing", age: 20, city: "seoul"};
console.log(o); // { name: 'egoing', age: 20, city: 'seoul' }
console.log(Object.keys(o)); // [ 'name', 'age', 'city' ]

console.log('----------------------------');

// Object.prototype.toString()
// prototype이 있는 경우, 메소드이기 때문에 객체를 만들고 .toString()으로 사용
// Ex) let a = new Object();
// a.toString()

// Object라고 하는 생성자 함수
// Object.prototype.toString = function(){...}
// 어떤 객체를 만들면 (new Object();) prototype이라는 특수한 property에 저장되어 있는 객체를 원형으로 하는, 객체를 생성
// ∴ Object prototype에 있는 내용은, 새로운 객체를 만들면 모두 상속받게 됨

// 객체 상태를 사람이 보기 편하게 string으로 출력해줌
var b = {};
console.log(b.toString()); // [object Object]

var a = [1,2,3];
console.log(a.toString()); // "1,2,3"