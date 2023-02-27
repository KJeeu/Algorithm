function solution(n) {
    return String(n).split('').map(Number).reduce((a, b) => a + b);
}

/*
reduce 안에서 String 배열 요소를 Number로 바꿔줄 수 있음

function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
*/