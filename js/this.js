// this: 함수 내에서 함수 호출 맥락(context)을 의미

// 함수와 this
function func(){
    if(window === this){
        document.write(window === this, '<br/>');
        document.write(this); // [object Window]
    }
}

func(); // true
// 함수 안에서 this 안에 담겨 있는 값이 window가 된다는 것을 뜻함

document.write("<br><br>");
document.write('----------------------------');
document.write("<br><br>");

// 메소드와 this
var o = {
    func: function(){
        if(o === this){
            document.write("o === this", "<br/>");
            document.write(this); // [object Object]
        }
    }
}

o.func(); // o === this
// 객체 안에 있는 메소드를 호출하면, 그 메소드가 소속되어 있는 객체를 this로 접근할 수 있음
// (o === this)가 true이므로 o가 this임

// func()안에서의 this → window => windows.func()
// func()이 결국 windows.func()이기 때문에, func()안의 this는 windows의 func()메소드 객체를 가리키는 것과 똑같음

// o.func()에서의 this → window.o.func() => o.func()은 o 객체에 소속되는 메소드이므로 this는 o를 가리키게 된다.

// 하지만 사실은 위의 두 예제 모두 같은 결과이다.
// ∴ 메소드의 소속인 객체를 가리킴

document.write("<br><br>");
document.write('----------------------------');
document.write("<br><br>");

// 생성자와 this
var funcThis = null; 
 
function Func(){
    funcThis = this; // 변수 키워드가 없으므로, 전역변수가 된다.
    // → 위에서 생성한 var functhis를 가리킴
    // 생성자로 사용되면 객체를 가리키지만, 함수로 사용되면 window를 가리킴
}
document.write("<br>");
document.write(funcThis); // null
document.write("<br>");

var o1 = Func(); // new 키워드가 없으므로, 단순 함수를 호출한 것임
document.write("<br>");
document.write(funcThis); // [object Window]
document.write("<br>");
if(funcThis === window){ // 함수를 호출하면 this는 전역 객체 window를 가리킴
    document.write('window <br />');
}
 
var o2 = new Func(); // 생성자를 호출하게 되면 js는 내부적으로 비어있는 객체를 만들고, 비어있는 객체가 생성자안에서 this가 됨 
// → 새로 생성되는 객체가 생성자안에서 this가 됨
document.write("<br>");
document.write(funcThis); // [object Object]
document.write("<br>");
if(funcThis === o2){
    document.write('o2 <br />');
}

console.log('----------------------------');

function Func123(){
    // 생성자 안에서의 this
    console.log(o3); // undefined
    console.log(this); // Func123 {}
    if(o3 === this){
        console.log(o3 === this);
        // 여기의 this는 객체에 대한 초기화가 끝나서 어떤 식별자에 담기기 전에
        // 그 객체를 참고할 수 있는 reference(식별자)가 된다.
        // 생성자 안에서 this는 그 생성자가 만든 객체를 가리킨다.
    } else{
        console.log(o3 === this); // 여기 조건문에 걸림 → false가 출력됨
    }
    funcThis = this;
}
var o3 = new Func123(); // false
// 1. 생성자를 호출한다.
// 2-1. 생성자에 대한 호출이 모두 끝난 다음에 비로소 o3 변수에 우리가 생성한 객체가 할당됨
// 2-2. 그 전 까지는 객체는 만들어지지만, 실제로 o3 변수에는 할당이 되어있지 않기 때문에 저 객체를 참조할 수가 없음