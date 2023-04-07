function solution(s) {
    let answer = [];
    let sum = "";
    let count = 0;
    s = s.split('');
    
    for (let i of s){
        if(i === ' ') {
            count = 0;
            answer.push(sum);
            sum = "";
            continue;
        }
        
        if(!(i === ' ') && count === 0) i = i.toUpperCase();
        else i = i.toLowerCase();
        
        count++;
        sum += i;
    }
    answer.push(sum);
    return answer.join(' ');
}