// 함수와 참조

var a = 1;
function func(b){
    b = 2;
}
func(a);
// func(a)라면, 함수로 전달된 인자 b가 a가 됨 (b = a)
// a = 1;
// b = a;
// b = 2;
// a에 담겨있는 1이라는 값을 복제해서 b에 할당하게 됨
// → 함수 안에서 b의 값을 2로 바꿔도 a에는 영향을 미치지 않음
console.log(a); // 1

console.log('----------------------------');

var a = {'id': 1};
function func(b){
    b = {'id': 2};
}
func(a);
// 마찬가지로 함수로 전달되는 인자인 b가 a가 됨 (b = a)
// a = {'id': 1};
// b = a;
// b = {'id': 2};

// b = a인 시점에서 b와 a는 같은 객체를 바라보고(참조)하고 있지만,
// b에 새로운 객체({'id': 2})를 할당하고 있기 때문에, a와 b의 link가 끊기게 되는 것임
// a에 담겨있는 객체는 그대로임
console.log(a.id); // 1

console.log('----------------------------');

var a = {'id': 1};
function func(b){
    b.id = 2;
}
func(a);
// 마찬가지로 함수로 전달되는 인자인 b가 a가 됨 (b = a)
// a = {'id': 1};
// b = a;
// b.id = 2;
// b의 id값을 변경하고 있다.
// 하지만 a와 b는 같은 객체를 바라보고 있기 때문에, b의 id값을 변경했지만 a의 id값도 변경된다.
console.log(a.id); // 2