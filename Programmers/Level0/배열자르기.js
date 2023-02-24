function solution(numbers, num1, num2) {
    const answer = [];
    for(let i = num1; i <= num2; i++){
        answer.push(numbers[i]);
    }
    return answer;
}

/*
배열의 slice 함수 이용

function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
}
*/