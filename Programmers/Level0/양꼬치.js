function solution(n, k) {
    let service = Math.floor(n / 10);
    let answer = (12000 * n) + (2000 * (k - service));
    return answer;
}

/*
틸트 연산자를 이용한 풀이가 새로웠다
~~ : Math.floor()와 동일하게 적용

function solution(n, k) {
    k-=~~(n/10);
    return (n * 12000) + (k * 2000);
}
*/