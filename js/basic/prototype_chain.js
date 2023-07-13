// prototype chain

function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
var t = new Ultra();
Super.prototype = t;
 
function Sub(){}
var s = new Super();
s.ultraProp = 10;
Sub.prototype = s;
 
var o = new Sub();
o.ultraProp = -5;
console.log(o.ultraProp); // -5
console.log(s.ultraProp); // 10
console.log(t.ultraProp); // true

console.log('============================');

// ※ 주의사항
function Super2(){}
Super2.prototype.name = 'Moon';

function Sub2(){}
Sub2.prototype = Super2.prototype; // 아래 처럼 부모의 prototype객체 자체를 물려주는 경우에는, 부모에게 원하지 않는 값 수정이 일어날 수 있음
Sub2.prototype.id = 'TEST';

console.log(Super2.prototype); // { name: 'Moon', id: 'TEST' }
// → Sub2에만 id를 추가했는데, 부모에게도 영향을 미치는 것을 볼 수 있음
console.log(Sub2.prototype); // { name: 'Moon', id: 'TEST' }