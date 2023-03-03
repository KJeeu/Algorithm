function solution(order) {
    return String(order).split('').filter(x => x === '3' || x === '6' || x === '9').length;
}

/*
정규표현식을 이용해서 아래와 같이 작성 가능
function solution(order) {
    return (''+order).split(/[369]/).length-1;
}
*/ 