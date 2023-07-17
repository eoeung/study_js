// 변수에 값이 아닌 함수를 저장
numbering = function(){
    i = 0;
    while(i < 10){
        document.write(i);
        i++;
    }
}

/**
 * 아래와 같은 코드이지만, 변수에 선언했다는 것이 차이점이다.
function numbering(){
    i = 0;
    while(i < 10){
        document.write(i);
        i++;
    }
}
 */

numbering();

// 1. 함수를 정의
// 2. 함수를 괄호로 묶음
// 3. 함수를 호출
// => 함수를 정의하고 호출하는 것이 한 문장에 있음
// **익명함수**라고 부름 // 일회성 호출
(function numbering(){
    i = 0;
    while(i < 10){
        document.write(i);
        i++;
    }
})();