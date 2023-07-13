// 상속3

function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My nickname is '+this.name; 
}
 
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person(); // Person을 통해 정의되어 있는 prototype을 가지고 온다.
Programmer.prototype.coding = function(){ // Person에는 coding()이라는 메소드가 없어야 하지만, Programmer에는 있어야 하는 경우
// 그래서 Programmer.prototype.메소드명 으로 따로 정의해준다.
    return "hello world";
}

var p1 = new Programmer('egoing');
console.log(p1.introduce()); // My nickname is egoing
console.log(p1.coding()); // hello world

console.log('============================');

function Designer(name){
    this.name = name;
}
Designer.prototype = new Person();
Designer.prototype.design = function(){
    return "beautiful!";
}

var p2 = new Designer('Moon');
console.log(p2.introduce()); // My nickname is Moon
console.log(p2.design()); // beautiful!