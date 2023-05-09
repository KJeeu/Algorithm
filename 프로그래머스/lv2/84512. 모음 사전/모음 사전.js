function solution(word) {
    let answer = 0;
    let length = word.length;
    
    //경우의 수 총합
    let max = 0;
    for (let i = 0; i < 5; i++){
        max += Math.pow(5, i);
    }
    
    //  ['A', 'E', 'I', 'O', 'U']
    for(let i = 0; i < length; i++){
        let x = word[i];
        
        if(x === 'A') {
            answer += 1;
        } else if (x === 'E') {
            answer += (Math.floor(max / Math.pow(5, i)) * 1) + 1;
        } else if (x === 'I') {
            answer += (Math.floor(max / Math.pow(5, i)) * 2) + 1;
        } else if (x === 'O') {
            answer += (Math.floor(max / Math.pow(5, i)) * 3) + 1;
        } else {
            answer += (Math.floor(max / Math.pow(5, i)) * 4) + 1;
        }
    }
    
    return answer;
}