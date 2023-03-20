function solution(num) {
    let answer = [];
    
    for(let i = 0; i < num.length; i++){
        for(let j = i + 1 ; j < num.length; j++){
            let x = num[i] + num[j];
            if (!(answer.includes(x))) answer.push(x);
        }
    }
    
    return answer.sort((a, b) => a - b);
}