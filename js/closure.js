// 클로저(closure)
// 함수 안에서만 사용하는 함수를 사용하고 싶은 경우

function outter(){
    var title = 'coding everybody';
    
    return function(){
        alert(title);
    }
}
var inner = outter();
inner();

// 1. 내부 함수를 포함하고 있는 외부 함수에 접근이 가능
// 2. 외부 함수가 종료된 이후에도, 외부 함수를 통해 접근이 가능함

function outter(){
    var title = 'coding everybody'; // inner()함수 안에 title변수가 없으므로 외부 함수에서 title이 있으면 가져다 씀
    function inner(){
        alert(title); // 1. title변수 사용, but inner()함수 안에는 title변수가 없음
    }
    inner();
}
outter();