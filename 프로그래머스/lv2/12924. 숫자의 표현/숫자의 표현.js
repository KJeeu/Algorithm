function solution(n) {
    let answer = 1;
    
    for(let i = 1; i < n; i++){
        let sum = i;
        for(let j = i+1; j < n; j++){
            sum += j;
            if(sum > n) break;
            if(sum === n) answer++;
        }
    }
    return answer;
}