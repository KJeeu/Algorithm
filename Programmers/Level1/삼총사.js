function solution(n) {
    let answer = 0;
    
    for(let i = 0; i < n.length - 2; i++){
        for(let j = i + 1; j < n.length - 1; j++){
            for(let k = j + 1; k < n.length; k++){
                if (n[i] + n[j] + n[k] === 0) answer++;
            }
        }
    }
    
    return answer;
}