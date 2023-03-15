function solution(s) {
    let a = Math.floor(s.length / 2);
    
    return s.length % 2 === 0 ? s[a-1] + s[a] : s[a];
}