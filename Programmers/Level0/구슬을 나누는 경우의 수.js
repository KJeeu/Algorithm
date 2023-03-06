function solution(balls, share) {
    function factorial(n) {
        result = 1
        for (let i = 1; i <= n; i++){
            result *= i 
        }
        return result;
    }
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}
/*
재귀를 이용하여 풀 수 있다

const factorial = (num) => num === 0 ? 1 : num * factorial(num - 1)

function solution(balls, share) {
  return Math.round(factorial(balls) / factorial(balls - share) / factorial(share))
}
 */