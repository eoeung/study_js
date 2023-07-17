// global object(전역 객체)
function func(){
    alert('Hello?');
}

func(); // window를 생략해도 사용 가능
window.func();

// 암시적으로 사용 가능 → 생략했을 때 기본적으로 ~~~이 사용된다.
// javascript에서 모든 함수, 변수는 window라는 전역 객체의 property라고 할 수 있음
// → 결국 javascript는 객체 지향 프로그램이다.

console.log('----------------------------');

var o = {'func': function(){
    alert('Hello!!!!!!!!!');
}};

o.func();
window.o.func();

// ※ 전역 객체 이름이 host 환경에 따라 달라질 수 있음
// 브라우저 환경에서는 window
// node.js 환경에서는 global임