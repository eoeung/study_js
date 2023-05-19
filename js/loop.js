// 반복문
// for

// 1부터 10까지 로그
for(let i=0; i<10; i++){
    console.log(i+1);
}
console.log('----------------------------');

// while
let i = 0;

while(i<10){
    console.log(i+1);
    i++;
}
console.log('----------------------------');

// break, continue
while(true){
    let answer = confirm("계속 할까요?");
    // 확인: true / 취소: false
    if(!answer){ // confirm에서 확인을 누르면 계속 반복되고, 취소를 누르면 break함
        break;
    }
}
console.log('----------------------------');

// continue
// 짝수만
for (let index = 0; index < 10; index++) {
    if(index%2){
        continue;
    }
    console.log(index);
}
console.log('----------------------------');