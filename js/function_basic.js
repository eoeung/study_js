// 함수
// 한 번에 한 작업에 집중
// 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍하는 것이 중요
/**
 * showError // 에러를 보여줌
 * getName // 이름을 얻어옴
 * createUserData // 유저데이터 생성
 * checkLogin // 로그인 여부 체크
 */

// 매개변수 없는 함수
// 에러 메시지 보여주는 함수
// return문이 없는 함수
function showError(){
    alert('에러가 발생했습니다. 다시 시도해주세요.');
}
showError();
const result = showError(); // 변수에 대입
console.log(result); // undefined
// return이 없는 함수는 항상 undefined를 반환함
console.log('----------------------------');

// return; 만 있는 함수
function showError2(){
    alert('에러가 발생했습니다. 새로고침 해주세요.'); // 유지보수가 쉬워짐
    return;
    alert('이 코드는 절대 실행되지 않습니다.'); // return에 의해 함수가 종료되었기 때문에 실행되지 않는다.
}
const result2 = showError2(); // 변수에 대입
console.log(result2); // undefined
// return; 만 있어도 undefined 반환
// return이 존재하면 그 즉시 return 오른쪽에 있는 값 반환하고 함수를 종료
// 함수를 종료하는 목적으로 return;을 사용하기도 함
console.log('----------------------------');

// 매개변수 있는 함수
function sayHello(name){
    const msg = `Hello, ${name}`;
    console.log(msg);
}

sayHello('Mike');
sayHello('Tom');
sayHello('Jane');
console.log('----------------------------');

function sayHello2(name){
    console.log(name);
    let msg = `Hello`; // 지역 변수 (local variable)
    if(name){
        // msg += ', ' + name;
        msg += `, ${name}`;
    }
    console.log(msg);
}

sayHello2();
sayHello2('Mike');
//console.log(msg); // ReferenceError: msg is not defined
console.log('----------------------------');

let msg = 'Hello'; // 전역 변수 (global variable)
function sayHello3(name){
    if(name){
        // msg += ', ' + name;
        msg += `, ${name}`;
    }
    console.log(msg);
}

sayHello3();
sayHello3('Mike');
sayHello3('Tom');
console.log(msg); // ReferenceError: msg is not defined
console.log('----------------------------');