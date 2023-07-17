// 상속1

// 생성자 함수
function Person(name){
    this.name = name;
    this.introduce = function(){
        return `My name is ${this.name}`;
    }
}

let p1 = new Person('Moon');
console.log(p1.introduce()); // My name is Moon

console.log('----------------------------');

// 생성자 함수
function Person2(name){
    this.name = name;
}

// 객체의 prototype이라고 하는 특수한 property가 존재한다.
Person2.prototype.name = null; // prototype안에는 어떠한 객체가 있음
Person2.prototype.introduce = function(){ // prototype이라는 property에 introduce()라는 메소드를 정의
    return `My name is ${this.name}`;
}

let v2 = new Person2('Moon');
console.log(v2.introduce()); // My name is Moon