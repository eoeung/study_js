var grades = {
    'list': {
        'egoing': 10,
        'k8805': 8,
        'sorialgi': 80,
    },
    'show': function(){
        // alert('Hello world');

        // 함수가 소속되어 있는 객체를 가리킴
        // → 지금 function을 소유하는 변수를 가리킴
        // console.log(this.list); // {egoing: 10, k8805: 8, sorialgi: 80}

        for(var name in this.list){
            console.log(name, this.list[name]);
        }
        // egoing 10
        // k8805 8
        // sorialgi 80
    }
}

alert(grades['list']['k8805']);
// grades['show']();
grades.show();

// grades라는 객체, 그 안에 있는 list라는 객체, list 객체를 사용하는 show라는 함수
// 객체에 소속되어 있는 함수를 호출해서 사용할 수 있음

// [객체 지향 프로그래밍]
// 서로 연관되어 있는 값(데이터)과 연관되어 있는 처리를 하나의 그릇(변수)안에 모아서 grouping 해놓은 기법