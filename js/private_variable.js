// private variable
// 정보를 아무나 수정하는 것을 방지하는 것

// 객체 안에 함수가 정의되어 있음
// 즉, factory_movie라는 외부 함수 내에 get_title, set_title이라는 내부 함수가 존재(물론 객체 안에 있지만..)
function factory_movie(title){
    return {
        get_title: function(){
            return title;
        },
        set_title: function(_title){
            if(typeof _title === 'string'){
                title = _title;
            } else {
                console.log('제목은 문자열이어야 합니다.');
            }
        }
    }
}

ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

// 결국 객체를 반환해준다.
// property는 get_title, set_title
console.log(ghost.get_title()); // Ghost in the shell
console.log(matrix.get_title()); // Matrix

ghost.set_title('공각기동대'); // set_title을 이용해서 title 변경

console.log(ghost.get_title()); // 공각기동대 → get_title()의 반환값이 변경됨
console.log(matrix.get_title()); // Matrix

ghost.set_title(1); // set_title의 인자는 문자열만 가능

// ∴ 정리
// factory_movie(title)의 이 title이라는 (factory_movie() 함수의) 지역변수는 호출하면 생을 마감해버린다.
// 그러므로 get_title()과 set_title()을 통해서만 접근이 가능하다.

// factory_movie(), get_title(), set_title()은 누구나 접근 가능하다. (public)
// 하지만, set_title()을 통해서 값을 변경하게 되면 모든 객체에게 영향을 주는 것이 아니라 해당 객체만 영향을 주게 됨
// Ex) 위 예제에서 ghost만 공각기동대로 변경되었음