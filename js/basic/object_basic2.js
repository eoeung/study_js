// method
// method: 객체 프로퍼티로 할당 된 함수
// Ex) superman객체에 fly()라는 함수로 된 property를 넣어줌
// 이 fly()함수가 superman객체의 메서드임
const superman = {
    name: 'clark',
    age: 33,
    fly: function(){ // 객체의 property로 함수가 할당됨
        console.log('날아갑니다.');
    }
}

superman.fly();
console.log('----------------------------');

let boy = {
    name: "Mike",
    showName: function(){
        console.log(boy.name);
    }
};
boy.showName(); // Mike

let man = boy;
console.log(boy);
console.log(man);

man.name = "Tom";
console.log(boy.name); // Tom
man.showName(); // Tom

boy = null;
console.log(boy); // null
console.log(man);
// man.showName(); // Cannot read properties of null (reading 'name')
console.log('----------------------------');

// this
let boy2 = {
    name: "Mike",
    showName: function(){
        console.log(this.name); // boy.name에서 this.name으로 변경
    }
};
let man2 = boy2;

boy2 = null;
console.log(boy2); // null
console.log(man2); // Object
// -> boy2와 man2 모두 같은 객체를 참조하다가, boy2 = null에 의해 boy2 변수만 null을 참조하고 man2 변수는 계속 참조한 Object를 바라본다.
man2.showName(); // Mike
console.log('----------------------------');

// function키워드 대신 ()로 대신한 함수
let boy3 = {
    name: 'Moon',
    sayThis(){
        console.log(this);
    }
};
boy3.sayThis();
console.log('----------------------------');

// 화살표 함수
let boy4 = {
    name: 'Moon',
    sayThis:()=>{
        console.log(this);
    }
};
boy4.sayThis(); // 화살표 함수로 메서드를 작성하면, this는 boy4라는 객체가 아닌 window를 가리키게 됨 -> 화살표 함수로 작성하지 않는 것이 좋음
console.log('----------------------------');

// ${hobby} 테스트
let hobby = 'football 111';
let girl = {
    name: 'Jane 111',
    age: 111,
    hobby: 'baseball 111',
    sayHobby: function(){
        console.log(`Hello, My Hobby is ${hobby}`);
    }
}

girl.sayHobby(); // Hello, My Hobby is football 111
// girl 객체에 있는 hobby 프로퍼티가 아닌 변수로 할당된 hobby의 값을 가지고 온다.
console.log('----------------------------');

// this 테스트
let hobby2 = 'football 222';
let girl2 = {
    name2: 'Jane 222',
    age2: 222,
    hobby2: 'baseball 222',
    sayHobby: function(){
        console.log(`Hello, My Hobby is ${this.hobby2}`);
    }
}
girl2.sayHobby(); // Hello, My Hobby is baseball 222
// girl2에 있는 hobby2 프로퍼티의 값을 가지고 온다.
console.log('----------------------------');

// 화살표 함수에서의 this 테스트
// 화살표 함수에서는 this가 전역객체를 가리킴
// 브라우저 환경 : window
// Node js : global
let hobby3 = 'football 333';
let girl3 = {
    name3: 'Jane 333',
    age3: 333,
    hobby3: 'baseball 333',
    sayHobby:()=>{
        console.log(`Hello, My Hobby is ${this.hobby3}`);
    }
}
girl3.sayHobby(); // Hello, My Hobby is undefined
// https://codingapple.com/unit/es6-3-arrow-function-why/
// 근데 arrow function은 어디서 쓰든간에 내부의 this 값을 변화시키지 않습니다. 
// 그러니까 바깥에 있던 this의 의미를 그대로 내부에서도 사용하는 함수가 바로 arrow function 이라는 함수입니다.
// this값은 함수를 만나면 항상 변하는데 arrow function 안에서는 변하지 않고 밖에 있던 this를 그대로 씁니다.
// (오브젝트 밖에 있던 this는 window입니다.)
// 왜냐면 arrow function은 외부에 있던 this를 그대로 내부로 가져와서 사용하는 함수기 때문입니다. 
console.log('----------------------------');

// 함수 선언문
let object111 = {
    abc: function(){
        console.log(this);
    }
}
object111.abc(); // Object
console.log('----------------------------');

// 함수 선언문 줄임
let object222 = {
    abc(){
        console.log(this);
    }
}
object222.abc(); // Object
console.log('----------------------------');

// 화살표 함수
let object333 = {
    abc:()=>{
        console.log(this);
    }
}

object333.abc(); // window
console.log('----------------------------');