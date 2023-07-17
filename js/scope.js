function a(){
    var i = 0; // 01234
    // i = 0; // 무한 반복 → for문에서 선언한 i가 전역변수가 되어버림
}

for(var i=0; i<5; i++){
    a();
    document.write(i);
}