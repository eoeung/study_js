// alert : 알림
alert("Hello World!");

// prompt : 입력
const name = prompt("이름을 입력해주세요.", "김철수"); // 취소 버튼을 누르면 null값 (2번째 인자인 default값(김철수)를 넣어주면 김철수가 들어옴)
// alert(name + "님 환영합니다.");
console.log(`${name} 님 환영합니다.`);
console.log('----------------------------');

// confirm : 확인 및 취소
const isAdult = confirm("당신은 성인 입니까?");
console.log(isAdult);
console.log('----------------------------');

// 창이 떠있는 동안, 스크립트 일시 정지
// 스타일링이 불가능