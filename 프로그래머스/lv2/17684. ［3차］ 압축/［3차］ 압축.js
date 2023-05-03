function solution(msg) {
    let alph = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let answer = [];
    let sum = '';
    
    for(let i = 0; i < msg.length; i++){
        sum += msg[i];
        
        if(!alph.includes(sum)) {
            answer.push(alph.indexOf(sum.slice(0, -1)) + 1);
            alph.push(sum);
            sum = msg[i];
        }
    }
    if(sum) answer.push(alph.indexOf(sum) + 1);
    return answer;
}