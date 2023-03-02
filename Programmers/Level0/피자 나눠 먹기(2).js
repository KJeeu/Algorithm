function solution(n) {
    const x = (a, b) => {
        if (b === 0) return a;
        return x(b, a % b);
    }
    
    const y = (a, b) => (a * b) / x(a, b);
    
    return (y(n, 6) / 6);
}

/*
최소공배수 구하는 문제길래 유클리드 호제법으로 풀었는데
다른 사람 풀이를 보니까 괜히 복잡하게 푼 거 같다

const solution = (n) => {
    let piece = 6

    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }
    return piece / 6
}
*/