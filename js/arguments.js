// arguments
function sum(){
    var i, _sum = 0;    
    for(i = 0; i < arguments.length; i++){ // arguments라는 유사 배열(객체)에는 사용자가 전달한 인자가 저장되어 있음
        console.log(i+' : '+arguments[i]);
        _sum += arguments[i];
    }   
    return _sum;
}
console.log('result : ' + sum(1,2,3,4));
// result : 10
// sum()함수는 매개 변수를 받지 않는데, 에러가 나지 않고 4개의 인자가 모두 전달되는 것을 알 수 있음 → how? arguments라는 유사 배열(객체)덕분

// javascript는 매개 변수와 인자를 맞추지 않아도 타 언어와 다르게 에러가 나오지 않는다.

// 매개 변수의 수 - function length
function zero(){
    console.log(
        'zero.length:', zero.length,
        'arguments:', arguments.length,
    );
}
zero(); // zero.length:  0 arguments:  0

function one(arg1){
    console.log(
        'one.length:', one.length, // 1
        'arguments:', arguments.length, // 2
    );
}
one('val1', 'val2'); // one.length: 1 arguments: 2
// function.length: 함수가 정의한 매개 변수의 수
// arguments.length: 몇 개의 인자를 전달했는가?

function two(arg1, arg2){
    console.log(
        'two.length:', two.length,
        'arguments:', arguments.length,
    );
}
two('val1'); // two.length: 2 arguments: 1