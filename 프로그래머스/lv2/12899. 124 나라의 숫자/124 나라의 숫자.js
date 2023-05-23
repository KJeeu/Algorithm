function solution(n) {
  let answer = '';
  let num = [4, 1, 2];

  while (n > 0) {
    answer = num[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }

  return answer;
}