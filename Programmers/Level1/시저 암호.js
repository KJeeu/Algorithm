function solution(s, n) {
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let answer = "";
    
    for (let i = 0; i < s.length; i++){
        if(s[i] === ' ') answer += ' ';
        else {
            let text = lower.includes(s[i]) ? lower : upper;
            let index = text.indexOf(s[i]) + n;
            if(index >= text.length) index -= text.length;
            answer += text[index];
        }
        
    }
    return answer;
}