// 동등 연산자
const a = 1;
const b = "1";

console.log(a == b); // true
console.log(a === b); // false // 일치 연산자
console.log('----------------------------');
// 타입까지 비교해주는 연산자임

// 조건문 (if, else, else if)
// 추가 요구사항 : 19살이면 수능 잘 치세요 문구 출력
// age === 19
const age = 19;
if(age > 19){
    console.log('환영합니다.');
} else if(age === 19){
    console.log('수능 잘 치세요.');
} else{
    console.log('안녕히 가세요.');
}
console.log('----------------------------');