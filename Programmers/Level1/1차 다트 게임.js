function solution(dartResult) {
    let answer = [];
    let num = 0;
    
    for(let i = 0; i < dartResult.length; i++){
        if(dartResult[i] === '1' && dartResult[i+1] === '0'){
            if(num !== 0) answer.push(num);
            num = Number(dartResult[i] + dartResult[i+1]);
            ++i;
        } else if(!(isNaN(dartResult[i]))){
            if(num !== 0) answer.push(num);
            num = Number(dartResult[i]);
        };
        
        if(dartResult[i] === 'D') num = num**2;
        else if(dartResult[i] === 'T') num = num**3;
        
        if(dartResult[i] === '*') {
            answer[answer.length - 1] *= 2;
            num *= 2;
        } else if(dartResult[i] === '#') num = -num;
    }
    answer.push(num);
    
    return answer.reduce((a, b) => a + b, 0);
}