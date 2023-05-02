function solution(n, k) {
    let num = n.toString(k);
    let num2 = num.split('0');
    let answer = 0;
    
    for(let i of num2){
        //소수 판별
        if(i === '1') continue;
        let count = 0;
        for(let j = 2; j <= Math.sqrt(i); j++){
            if(i % j === 0) count++;
        }
        
        //소수가 아니라면
        if(count !== 0) continue;

        num = num.replace(i, 'P');
        
        //조건
        let numIndex = num.indexOf('P');
        if(numIndex !== 0 && num[numIndex - 1] === '0' && num[numIndex + 1] === '0') answer++;
        if(numIndex === 0 && num[numIndex + 1] === '0') answer++;
        if(numIndex === num.length - 1 && num[numIndex - 1] === '0') answer++;
        if(num.length === 1) answer++;
            
        num = num.replace('P', 'A');
    }
    return answer;
}