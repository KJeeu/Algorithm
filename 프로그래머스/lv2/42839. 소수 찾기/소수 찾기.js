function solution(numbers) {
  const answer = new Set();

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const permute = (arr, visited, str) => {
    if (str.length > 0) {
      const num = Number(str);
      if (isPrime(num)) answer.add(num);
    }
    if (str.length >= arr.length) return;

    for (let i = 0; i < arr.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        permute(arr, visited, str + arr[i]);
        visited[i] = false;
      }
    }
  };

  const digits = numbers.split('');
  const visited = new Array(digits.length).fill(false);
  permute(digits, visited, '');

  return answer.size;
}
