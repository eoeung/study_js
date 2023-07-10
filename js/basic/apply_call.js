// 함수의 메소드인 apply, call
function sum(x,y){return x+y;}; // sum()이라고 하는 함수 객체를 생성한 것임
// → 함수 리터럴(function literal)
console.log(sum(1,2)); // 3

// Ex) 배열 생성
// let a = [1,2,3]; // 배열 리터럴
// let a = new Array(1,2,3); // 생성자 함수 호출

// new 키워드로 Function이라는 이름의 생성자 함수를 호출
var sum2 = new Function('x','y','return x+y');
console.log(sum2(1,2)); // 3

// ∴ 결국 function sum(...){...}과 new Function(...)은 같은 의미임
// → 객체를 반환하게 되므로, 모든 객체는 property와 method를 가질 수 있다.
// 함수가 가질 수 있는 method 중에 apply()와 call()이 있음

console.log('----------------------------');

var o = {}
var p = {}
function func(){
    switch(this){
        case o:
            document.write('o<br />');
            break;
        case p:
            document.write('p<br />');
            break;
        case window:
            document.write('window<br />');
            break;          
    }
}
func();
func.apply(o);
func.apply(p);
// apply()메소드의 첫 번째 인자로 함수 호출 context를 준다.
// 1. func() 함수 실행
// 2. apply()메소드의 첫 번째 인자인 객체 o가 this가 된다.

// 메소드는 무조건 객체 안에서만 존재할 수 있음(객체-메소드 → master-slave)
// 하지만 javascript는 유연하다..?

// func()함수를 어떻게 호출하냐에 따라서 window가 되기도 하고 o 또는 p가 되기도 한다.
// 맥락적으로 함수는 어떠한 객체에 종속되는 존재이기도 하다.

// this가 어떤 맥락에서 어떤 의미를 갖는 것인지 → this는 변화무쌍하지만
// ★★★함수가 누구의 소속이냐에 따라서 this의 값은 그 소속(객체)를 가리킨다!★★★