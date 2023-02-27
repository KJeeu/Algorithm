function solution(n) {
    for(let i = 1; i*i <= n; i++){
        if (i*i === n) return 1
    } return 2;
}

/*
Math.sqrt()메서드는 숫자의 제곱근을 반환한다.
Number.isInteger()메서드는 전달된 값이 정수 여부 T/F 결정한다
역시 메서드를 알아야 편하고 깔끔하게 코드를 짤 수 있다..

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
*/