// prototype(원형)

function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
Super.prototype = new Ultra();
// ## 해석 ##
// 1. Super 생성자의 prototype 객체는
// 2. new Ultra → Ultra라고 하는 생성자로 인해서 만들어진 객체가 담기게 된다.
 
function Sub(){}
Sub.prototype = new Super();
 
var o = new Sub();
console.log(o.ultraProp); // true
// ulterProp은 Sub, Super가 아닌 Ultra가 가지고 있음
// Sub로 먼저 접근하면 ulterProp이 없으므로, Javscript는 내부적으로 다음 상위 객체인 Super에서 확인한다.
// Super에도 없으므로 다음 상위 객체인 Ultra에서 ulterProp를 확인한다.

// ∴ 정리
// 1. 객체 o에서 ultraProp를 찾는다.
// 2. 없다면 Sub.prototype.ultraProp를 찾는다.
// 3. 없다면 Super.prototype.ultraProp를 찾는다.
// 4. 없다면 Ultra.prototype.ultraProp를 찾는다.


// 생성자 → 함수
// 함수 호출 시 new를 붙이면 생성자가 된다. → 새로운 객체를 만들어서 반환해줌

// 빈 객체를 생성하는 경우, 객체 리터럴인 var o = {}도 된다.

// 객체안에 데이터와 로직이 있으므로 그 객체 안에 있는 property, method를 가지고 오는 것이 좋다.
// → 객체가 가지고 있는 property, method 등의 정보를 가지고 있는 것이 prototype(원형)이다.

// prototype안에는 어떠한 객체가 정의되어 있음
// new로 객체를 생성하게 되면, 생성자 함수의 prototype에 저장되어 있는 객체를 꺼내서 반환해준다.

function func(){}
console.log(func.prototype); // {}
func.prototype.name = 'Moon';

let f = new func();
console.log(f); // func {}
console.log(f.name); // "Moon"