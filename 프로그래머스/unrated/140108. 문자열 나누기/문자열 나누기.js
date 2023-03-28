function solution(s) {
    let count = 0;
    let x = s[0];
    let xCount = 1;
    let yCount = 0;
    
    if(s.length === 1) return 1;
    for (let i = 1; i < s.length; i++){
        if(s[i] === x) xCount++;
        else yCount++;
        
        if(xCount === yCount) {
            count++;
            x = s[i + 1];
        } else if(i === s.length - 1) count++;
        
    }
    return count;
}