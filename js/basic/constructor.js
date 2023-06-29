// 객체 리터럴
let user111 = {
    name: 'Mike',
    age: 30
}
let user222 = {
    name: 'Jane',
    age: 22
}
let user333 = {
    name: 'Tom',
    age: 17
}
// ...
// 일일이 만들기에 비효율적임

// 생성자 함수
// 일일이 객체 리터럴을 만드는 것보다 훨씬 효율적임
// 첫 글자는 대문자로!
// -> 어떤 함수라도 new를 붙여서 실행하면 아래의 알고리즘이 모두 동일하게 동작함
// 첫 글자를 대문자로 하는 것이 관례임
function User(name, age){
    this.name = name;
    this.age = age;
}

let user1 = new User('Mike', 30);
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17);

console.log(user1);
console.log(user2);
console.log(user3);
console.log('----------------------------');

// new User();를 할 때 일어나는 일

// function User(name, age){
//     this = {} // 1) 빈 객체를 만들고, this에 할당

// 2) this의 property들을 추가
//     this.name = name; // 2-1) name 추가
//     this.age = age; // 2-2) age 추가

//     return this; // 3) 마지막으로 this를 반환
// }

// 생성자 함수에 메소드 추가
function User2(name, age){
    this.name = name;
    this.age = age;
    // 자신의 이름을 말하는 기능
    this.sayName = function(){
        console.log(this.name);
    }
}

let user4 = new User2('Han', 40);
user4.sayName(); // Han
console.log('----------------------------');

// 생성자 함수 : 상품 객체를 생성해보자.
function Item(title, price){
    // this = {};
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price}원 입니다.`);
    }

    // return this;
}

const item1 = new Item('인형', 3000);
const item2 = new Item('가방', 4000);
const item3 = new Item('지갑', 9000);

console.log(item1, item2, item3);
console.log('============================');

item1.showPrice();
item2.showPrice();
item3.showPrice();
console.log('============================');

// new 키워드 없이 생성자 함수 호출
// -> new 키워드를 사용하지 않으면 단순하게 함수만 호출 되는 것임
const item4 = Item('노트북', 50000);
console.log(item4); // undefined
// 위에서 만든 생성자 함수는 return 값이 없기 때문에, undefined를 반환하고 그 값이 item4에 할당되는 것임

console.log('----------------------------');