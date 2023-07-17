// 클로저의 응용
// 클로저 사용 전
var arr = [];
for(var i=0; i<5; i++){
    arr[i] = function(){
        return i;
    }
}

for(var index in arr){
    console.log(arr[index]()); // 5, 5, 5, 5, 5
}
console.log(arr);
/**
[
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)]
]
 */

// 5, 5, 5, 5, 5 라고 나오는 이유: arr[i]는 i를 반환하는 함수인데, for문을 돌면서 i라는 변수의 값이 마지막으로 5가 되므로 계속 5만 반환하게 된다.

// 즉, function(){return i}의 함수를 내부 함수로 하는 외부 함수를 정의한 다음, 그 외부 함수의 지역 변수의 값을 내부 함수가 참조하게 하면 된다.
console.log('============================');

// 클로저 사용
var arr2 = [];
for(var k=0; k<5; k++){
    arr2[k] = function(idx){ // 외부 함수 정의 및 받아온 k값을 전달하고자 idx로 이름만 바꿔서 내부 함수가 참조할 수 있도록 던져준다.
        return function(){ // 내부 함수에서 외부 함수의 idx라는 변수를 참조해서 던져준다.
            return idx; 
        }
    }(k); // 외부 함수 즉석 호출 및 우리가 전달하길 원하는 변수인 k를 인자로 던져준다.
    
}

for(var index2 in arr2){
    console.log(arr2[index2]()); // 0, 1, 2, 3, 4
}
console.log(arr2);
/**
[
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)]
]
 */

// 0, 1, 2, 3, 4 라고 나오는 이유: arr[i]는 idx를 반환하는 함수인데, idx는 외부 함수에서 받아온 값이다. → 외부 함수에서 받아온 idx값은 function(idx){...}(k)에서 k의 값이 된다.
// 첫 번째 for문에서는 전역 변수인 i의 값만을 보기 때문에 계속 5가 출력되는데, 두 번째 for문에서는 전역 변수인 i의 값을 보는 것이 아니라 arr2[index2]()에서 index2의 값을 전달하게 된다.
// → function(idx){...}(k)에서 k의 값이 index2로 들어가게 된다.
// 즉, function(idx){...}(index2)가 되고, index2는 0~4이므로 0,1,2,3,4가 출력되며
// index2(외부 함수 호출 인자) → idx(외부 함수 호출 인자 및 내부 함수 참조 인자) → return idx(내부 함수에서 외부 함수의 지역 변수를 참조)