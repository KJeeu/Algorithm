function solution(n) {
    let answer = [];
    for(let i = 2; i <= n; i++){
        let count = 0;
        if(n % i === 0)
            for(let j = i; j > 1; j--){
                if(i % j === 0) count++
            }
        if(count === 1) answer.push(i)    
    }
    return answer;
}

/*
다른 사람 풀이를 보니 아래와 같이 푸는 방법도 있었다.
그러나 내가 푼 코드가 테스트 시간이 적게 걸린다

function solution(n) {
    var answer = [];

    for(let i = 2; i <= n; i++) {
        while (n % i === 0) {
            n = n / i;
            answer.push(i);
            console.log(i)
        }
    }
    return [...new Set(answer)];
}
 */