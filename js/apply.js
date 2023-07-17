// apply
// 객체 - 속성
// 속성에 함수가 들어있다면 → 메소드
function func(){

}
func();

// 프로그래머가 정의한 func이라는 함수
// 함수 func은 Function 객체의 인스턴스임
// → 객체 Function의 메소드인 apply를 호출할 수 있음
// func.apply 혹은 func.call 가능 → apply/call 메소드
func.apply
func.call

function sum(arg1, arg2){
    return arg1 + arg2;
}

console.log(sum(1,2)); // 3
console.log(sum(4,2)); // 6
console.log('============================');

console.log(sum.apply); // [Function: apply]

console.log('============================');
console.log(sum.apply(null, [1,2])); // 3
console.log(sum.apply(null, [4,2])); // 6

console.log('----------------------------');

// apply 사용
o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}

function sum2(){
    // sum2.apply(o1)인 경우, this값
    // var this = o1;

    // sum2.apply(o2)인 경우, this값
    // var this = o2;
    var _sum = 0;
    for(name in this){ // this는 호출할 때 정해짐
        _sum += this[name];
    }
    return _sum;
}

console.log(sum2.apply(o1)) // 6
console.log(sum2.apply(o2)) // 185
console.log('============================');

// 위 내용은 아래 내용과 같다.
// function.apply() 메소드는 마치 o1, o2 객체에 sum2:sum2를 추가한 것과 같은 효과를 내는 것임
// sum2()함수에 this를 추가해서 적용할 수 있도록 함
o1 = {val1:1, val2:2, val3:3, sum2:sum2}
console.log(o1.sum2()); // sum()함수의 내용이 그대로 나옴
o2 = {v1:10, v2:50, v3:100, v4:25, sum2:sum2}
console.log(o2.sum2()); // sum()함수의 내용이 그대로 나옴