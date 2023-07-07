// 동기적(synchronous) : 순서대로 처리하는 것
// 비동기적(asynchronous) : 한 번에 동시적으로 처리하는 것
// AJAX(Asynchronous Javascript And XML) : 웹 페이지를 불러오지 않고 서버와 클라이언트간 통신을 하는 것

$.get('../../js/basic/datasource.json.js', function(result){
    console.log(result);
}, 'json');