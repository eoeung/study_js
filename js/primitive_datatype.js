// 원시(기본) 데이터 타입 vs 객체(참조) 데이터 타입

// 원시(기본) 데이터 타입
// Number
// String
// Boolean
// null → Wrapper Object 존재하지 않음
// undefined → Wrapper Object 존재하지 않음
// BigInt
// symbol

// 객체(참조) 데이터 타입
// 원시 데이터 타입이 아닌 모든 데이터 타입 → 객체

// wrapper Object

var str = 'coding';
console.log(str.length); // 6
console.log(str.charAt(0)); // c
// 문자열은 원시 데이터 타입이나, 객체처럼 사용되고 있음
// → property 및 method를 사용
// .은 Object Access Operator = 객체 접근 연산자 라고 부름

// 즉, str은 문자열이고 str., Object Access Operator를 사용해서 property와 method를 사용하고 있음
// ∴ 원시 데이터 타입인 문자열이 마치 객체인 것 처럼 동작해야만 property 및 method를 사용할 수 있음 → 객체 지향 프로그래밍의 동작/사용 방법을 일관성 있게 할 수 있음

// var str = 'coding';
// str.length; 코드의 실행 순서
// 1) str = new String('coding')
// 2) String이라는 객체의 length값 확인
// → 사용이 끝난 객체는 원래의 원시 데이터 타입으로 돌려주는 작업을 진행한다.

var str = 'coding';
str.prop = 'everybody';
console.log(str.prop); // undefined

// str.prop 코드를 실행할 때는 객체가 만들어졌다. 하지만, 코드가 종료되면 객체를 제거하고 원래의 원시 데이터 타입으로 변경했기 때문에 str.prop라는 값은 존재하지 않는다.

// 방금처럼 원시 데이터 타입이 있을 때, 원시 데이터 타입을 마치 객체처럼 사용할 수 있도록 Javascript 내부적으로 만들어지는 객체를 Wrapper Object라고 한다.
// (→ str.prop를 실행할 때, 원시 데이터 타입인 str변수를 객체처럼 사용할 수 있도록 String객체가 생성되는 경우)
// → 그리고 모든 작업이 끝나면 이 객체는 제거되고 원시 데이터 타입으로 변경됨

// 문자열이라고 하는 원시 데이터를 String이라는 객체로 감싸주었다. → Wrapper Object

// Wrapper Object 덕분에 마치 원시 데이터 타입을 객체처럼 사용할 수 있게 된다.
// Javascript는 자동적으로 처리해준다. (타 언어 중에서는 자동적으로 처리해주지 않아 개발자가 따로 코드를 작성해야하는 경우 있음)

