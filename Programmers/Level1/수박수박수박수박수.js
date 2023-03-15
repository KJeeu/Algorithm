function solution(n) {
    let w = '수박';
    
    return n % 2 ? w.repeat((n - 1) / 2) + w[0] : w.repeat(n / 2);
}