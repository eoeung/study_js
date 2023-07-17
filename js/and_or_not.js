// 논리 연산자
// || (OR)
// && (AND)
// ! (NOT)

// OR
// 이름이 TOM이거나, 성인이면 통과
const name = "Mike";
const age = 30;

if(name === 'Tom' || age > 19){
   console.log("통과"); 
}
console.log('----------------------------');

// AND
// 이름이 Mike이고, 성인이면 통과
const name2 = "Mike";
const age2 = 30;

if(name2 === 'Mike' && age2 > 19){
   console.log("통과"); 
}
console.log('----------------------------');

// NOT
// 나이를 입력받아, 성인이 아니면 돌아가라고 작성
// const age3 = prompt('나이가..?');
// const isAdult = age3 > 19;

// if(!isAdult){
//     console.log('돌아가..');
// }

// 우선순위
// AND를 먼저 한 다음, OR를 한다.
// 남자이고, 이름이 Mike이거나 성인이면 통과
const gender = 'F';
const name3 = 'Jane';
const isAdult2 = true;

// 의도치 않은 코드
// 아래 주석친 코드와 동일하다.
if(gender === 'M' && name3 === 'Mike' || isAdult2){
//if((gender === 'M' && name3 === 'Mike') || isAdult2){
    console.log('통과');
} else{
    console.log('돌아가.');
}
console.log('----------------------------');

// 우리가 짜고자 한 코드
if(gender === 'M' && (name3 === 'Mike' || isAdult2)){
    console.log('통과');
} else{
    console.log('돌아가.');
}
console.log('----------------------------');