const solution = (n, t) => n * Math.pow(2, t);

/*
왼쪽 시프트 (<<) 비트 연산자를 알게 되었다.
a << b === a * 2**b

function solution(n, t) {
  return n << t;
}
*/