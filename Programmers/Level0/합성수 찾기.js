function solution(n) {
    let count = 0;
    for(let i = 1; i <= n; i++){
        if (Array(i).fill(0).map((x, index) => x + index + 1).filter(x => i % x === 0).length >= 3) count++ 
    }
    return count;
}