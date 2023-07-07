var numbers = [20,10,9,8,7,6,5,4,3,2,1];
// document.write(numbers.sort()); // [1,10,2,20,3,4,5,6,7,8,9]
// 객체.메소드() → 따로 라이브러리를 호출하지 않아도 된다. → 내장 객체 / built-in 객체
// → 앞 숫자가 작으면 맨 앞으로 정렬되었음
// => 우리가 원하는 것은 숫자 순서(오름차순)대로 정렬하는 것이다.
console.log('----------------------------');

var sortfunc = function(a, b){ // 
    console.log(a, b);
    if(a > b){
        return 1;
    } else if(a < b){
        return -1;
    } else{
        return 0;
    }
    // return 값이 양수인지 음수인지 0인지를 확인해서 정렬한다.
}
document.write('<br>');
document.write(numbers.sort(sortfunc));
// sortfunc 함수를 콜백함수(call-back function)라고 부른다.
// **값으로써 함수를 사용**할 수 있기 때문에, 기존 함수의 동작 방식을 값을 전달함으로써(여기서의 값=함수를 뜻함) 컨트롤을 할 수 있음 → 이것을 콜백이라고 부름