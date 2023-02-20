function solution(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    
    let answer = sum / numbers.length;
    return answer;
}

// for..of문 이용
// function solution(numbers) {
//     let sum = 0;
//     for(i of numbers){
//         sum += i
//     }
//     return sum / numbers.length;
// }