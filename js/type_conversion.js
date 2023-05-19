const mathScore = prompt("수학 점수");
const engScore = prompt("영어 점수");
const result = (mathScore + engScore) / 2;
console.log(result); // 이상한 값
console.log('----------------------------');

const mathScore2 = 90;
const engScore2 = 80;
const result2 = (mathScore2 + engScore2) / 2;
console.log(result2); // 올바른 값
console.log('----------------------------');

// 자동 형변환
const a = "6";
const b = "3";
console.log((a+b)/2); // 31.5 ## 문자형/숫자형인데 나누기가 계산됨("63"/2) -> 문자열이 숫자형으로 '자동 형변환'되었음
console.log('----------------------------');

// 명시적 형변환
// String() -> 문자형으로 변환
// Number() -> 숫자형으로 변환
// Boolean() -> 불린형으로 변환

// String()
console.log(
    String(3),
    String(true),
    String(false),
    String(null),
    String(undefined)
);
console.log('----------------------------');

console.log(
    typeof(String(3)),
    typeof(String(true)),
    typeof(String(false)),
    typeof(String(null)),
    typeof(String(undefined))
);
console.log('----------------------------');

// Number()
// Number("문자") -> NaN
// Number(null) -> 0
// Number(undefined) -> NaN
console.log(
    Number("1234"), // 1234
    Number("1234abscxadf"), // NaN
    Number(true), // 1
    Number(false), // 0
    Number(null), // 0 -> Prompt에서 취소 누르면 null값이 들어옴 -> 결국 0이 됨
    Number(undefined), // NaN
    Number("1/0") // NaN
);
console.log('----------------------------');

console.log(
    typeof(Number("1234")),
    typeof(Number("1234abscxadf")),
    typeof(Number(true)),
    typeof(Number(false)),
    typeof(Number(null)),
    typeof(Number(undefined)),
    typeof(Number("1/0"))
);
console.log('----------------------------');

// Boolean()
// 아래에 해당하는 것만 -> false임
// 숫자 0
// "" (빈 문자열)
// null
// undefined
// NaN