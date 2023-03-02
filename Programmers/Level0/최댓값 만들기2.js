function solution(numbers) {
    const x = numbers.sort((a, b) => a - b);
    const a = x[0] * x[1];
    const b = x[numbers.length - 1] * x[numbers.length - 2]
    return a > b ? a : b
}

/*
내가 푼 방식과 같지만 Math.max()로 코드를 더 간략하게 쓸 수 있다

function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}
*/