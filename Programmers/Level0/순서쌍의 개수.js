function solution(n) {
    const answer = ~~(n / 2);
    let count = 1;
    for(let i = 1; i <= answer; i++) {
        if(n % i === 0)
            count++;
    }
    return count;
}