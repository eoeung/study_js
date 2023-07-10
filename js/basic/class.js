// class
const User = function(name, age){
    this.name = name;
    this.age = age;
    this.showName = function(){
        console.log(this.name);
    };
};

const mike = new User('Mike', 30);
console.log(mike); // User { name: 'Mike', age: 30, showName: [Function (anonymous)] }
// showName()메소드는 객체 안에 존재

console.log('----------------------------');

// ES6에 추가된 스펙
// class 키워드로 클래스 정의
class User2{
    // construnctor 키워드: 객체를 만들어 주는 생성자
    // new를 사용하면 자동으로 실행
    // 초기화할 내용을 기술
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    };
};

const tom = new User2('Tom', 19);
// new 키워드로 호출하면, 내부에서 정의된 내용으로 객체를 생성
console.log(tom); // User2 { name: 'Tom', age: 19 }
// showName() 메소드는 prototype에 저장됨(객체 안에 없음)

console.log('----------------------------');

// User 변수를 class 키워드를 사용한 것과 동일하게 변경하는 방법
const User3 = function(name, age){
    this.name = name;
    this.age = age;
    // this.showName = function(){
    //     console.log(this.name);
    // };
};

User3.prototype.showName = function(){
    console.log(this.name);
};

const jane = new User3('Jane', 33);
console.log(jane); // User3 { name: 'Jane', age: 33 }

console.log('----------------------------');

const jane1 = User3('Jane', 55);
console.log(jane1); // undefined
// class 키워드로 정의하지 않은 함수를 호출
// 함수에서 반환한 값이 없기 때문에 undefined 반환 → 에러로 뜨지 않아 개발자가 파악하기 매우 어려움

// class 키워드로 정의한 객체를 호출
// const jane2 = User2('Jane', 55); // TypeError: Class constructor User2 cannot be invoked without 'new'
// TypeError, 에러가 뜨기 때문에 개발자가 알아차리기 쉬움

console.log('----------------------------');

// for ... in 문으로 객체 내부 찍어보기
// User3 이용 → class 키워드 사용 X
for(const p in jane){
    console.log(p);
}
// name
// age
// showName
console.log('============================');

// User2 이용 → class 키워드 사용 O
for(const p in tom){
    console.log(p);
}
// name
// age

console.log('----------------------------');

