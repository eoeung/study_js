// Object 확장

// contain()이라는 메소드를 만들어서 모든 객체에 사용할 수 있도록 설정
// contain()메소드는 검색할 요소(value)가 해당 객체에 있는지 확인하는 메소드이다.

Object.prototype.contain = function(needle){
    for(var name in this){ // 메소드 안에서 this는 메소드가 소속된 객체를 의미
        console.log(name);
        if(this[name] === needle){
            return true;
        }
    }

    return false;
}

var o = {'name':'egoing', 'city':'seoul'}
console.log(o.contain('graphittie')); // false
console.log(); // 마지막까지도 찾는 요소가 없으면 name에 contain이라는 값이 들어감

var a = ['egoing','leezche','grapittie'];
console.log(a.contain('leezche')); // true

console.log('----------------------------');

// 확장을 하는 이유는 모든 객체에 영향을 주기 때문.
// 반대로 모든 객체에 영향을 주기 때문에 신중하게 작업할 필요가 있음

for(var name in o){
    console.log(o[name]);
}
// egoing
// seoul
// [Function (anonymous)]
// → 개발자 도구에서의 결과
// for(var name in this){
    // console.log(name);
    // if(this[name] === needle){
    //     return true;
    // }
// }
// 함수가 그대로 노출됨

console.log('============================');

for(var name in o){
    console.log(name);
}
// name
// city
// contain

console.log('============================');

for(var name in a){
    console.log(name);
}
// 0
// 1
// 2
// contain

// for ... in 문을 사용했을 때, 프로그래머는 정의한 값만 나오는 것을 기대한다. → contain은 이 기대를 저버리는 것
// 필요한 최소 범위로 확장하는 것이 좋지 않을까?

console.log('----------------------------');

for(var name in a){
    if(a.hasOwnProperty(name)){ // hasOwnProperty(): 그 객체에 직접적으로 정의되어 있는지를 확인하는 기능
        console.log(name);
    }
}
// 0
// 1
// 2