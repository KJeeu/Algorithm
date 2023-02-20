function solution(my_string) {
    let answer = "";
    for (let i = my_string.length-1; i >= 0; i--){
        answer += my_string[i];
    }
    return answer;
}

//함수, 메서드 이용해서 간단하게 풀 수 있다
// function solution(my_string) {
//     return [...my_string].reverse().join('');
// }