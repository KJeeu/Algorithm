function solution(numbers) {
    const numbersList = numbers.sort((a, b) => a - b)
    const answer = numbersList[numbers.length - 1] * numbersList[numbers.length - 2]
    return answer;
}

/*
내림차순으로 풀면 간결하게 풀 수 있다
function solution(numbers) {
    const numbersList = numbers.sort((a, b) => b - a)
    const answer = numbersList[0] * numbersList[1]
    return answer;
}
*/