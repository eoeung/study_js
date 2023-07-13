// 상속2

// Person이라는 생성자
function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}

// Programmer라는 생성자
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
 
var p1 = new Programmer('egoing');
console.log(p1.introduce()); // My name is egoing
// p1은 Programmer 생성자이며, introduce() 메소드가 없음에도 사용이 가능하다.
// → Programmer가 Person을 상속받았기 때문에 가능한 일이다.
// => Programmer라는 생성자가 가지고 있는 property 중, prototype이라고 하는 특수한 property의 값으로 new Person()을 진행