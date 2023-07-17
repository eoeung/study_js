function Person(){}
var p0 = Person();
// 함수의 반환값이 없으므로 undefined임
var p1 = new Person(); // new 키워드 사용
// new 키워드를 사용하면 Person()을 함수라고 보지 않고, 생성자라고 인지함
// 생성자는 비어 있는 객체를 만들고, 그 객체를 반환
// 함수가 객체의 창조자가 될 수 있음
// ∴ new 키워드를 사용하면 반환값이 객체가 된다.

console.log(p0); // undefined
console.log(p1); // Person {} → 비어있는 객체
console.log('----------------------------');

function Person1(){}
var z1 = new Person1();
var z2 = new Person1();

z1.name = 'egoing';
z1.introduce = function(){
    return 'My Name is ' + this.name;
}
z2.name = 'leezche';
z2.introduce = function(){
    return 'My Name is ' + this.name;
}

console.log(z1.introduce()); // My Name is egoing
console.log(z2.introduce()); // My Name is leezche

// 함수 부분은 중복되어 있음!! → 해결 방법? ★생성자★

console.log('----------------------------');

function Person2(name){
    this.name = name; // name이라는 property를 정의
    this.introduce = function(){ // introduce라는 method를 정의
        return 'My name is ' + this.name;
    }
}
// 생성자 함수 안에 기술 → 초기화
// 어떤 property와 어떤 method를 가져야 하는지 등 객체가 할 수 있는 일 등을 기술
// 객체에 대한 초기화를 진행하는 것임

var w1 = new Person2('egoing');
var w2 = new Person2('leezche');

console.log(w1.introduce()); // My name is egoing
console.log(w2.introduce()); // My name is leezche