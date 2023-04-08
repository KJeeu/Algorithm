function solution(A,B){    
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    
    return A.map((x, i) => x * B[i]).reduce((a, b) => a + b, 0);
}