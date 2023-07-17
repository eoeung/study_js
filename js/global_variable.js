// MYAPP = {}
var MYAPP = {} // 어떠한 함수에도 속하지 않기 때문에, 전역변수가 됨
// 전역변수를 무분별하게 생성하지 않고, MYAPP이라는 변수 하나만 만들어서 관리하는 방법이다.
MYAPP.calculator = {
    'left' : null,
    'right' : null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}
 
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());

// 전역변수를 사용하지 않고 싶을 때(익명함수 호출)
(function(){
    var MYAPP = {} // 함수 안에서 선언된 변수(var)이므로, 더 이상 전역변수가 아닌 현재 함수의 지역변수가 된다.
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}())