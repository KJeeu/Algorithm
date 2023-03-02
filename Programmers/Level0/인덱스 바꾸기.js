function solution(my_string, num1, num2) {
    const answer = my_string.split('');
    answer.splice(num1, 1, my_string[num2]);
    answer.splice(num2, 1, my_string[num1]);
    return answer.join('');
}

/*
아래 구조 분해 할당으로 풀 수 있다.

function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}
*/