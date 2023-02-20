function solution(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++){
        if (i%2 === 0){
            sum += i
        }
    }
    return sum;
}

//수열 공식 이용한 다른 풀이도 있었다
function solution(n) {
    let sum = Math.floor(n/2);
    return sum * (sum + 1);
}