function solution(absolutes, signs) {
    for(let i = 0; i < signs.length; i++){
        if(signs[i] === false) absolutes[i] = -absolutes[i]; 
    }
    return absolutes.reduce((a, b) => a + b);
}

/*
다른 풀이를 보니 삼항연산자를 이용하여 한줄로 적는 코드가 있었다.
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
*/