// 복제

var a = 1;
var b = a;
b = 2;

console.log(a); // 1
console.log(b); // 2

// b = a 코드를 실행하면 a에 담겨있는 1이라는 값을 복사해서 b가 이 값을 가지고 있게 됨
// → 애초에 a와 b가 가리키는 값이 다르기 때문에(값 자체는 1로 동일하지만, 복사했기 때문에 다른 1이라는 값을 가리키고 있음) b를 2로 변경해도 a의 값은 변경되지 않음

// 변수에 담겨 있는 경우가 원시 데이터 타입인 경우, 위의 경우와 같음
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

// 객체에서는 어떻게 동작하는지, reference.js 파일에 작성