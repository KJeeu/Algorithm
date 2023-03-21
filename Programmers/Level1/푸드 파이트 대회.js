function solution(food) {
    let answer = "";
    food.shift();
    
    for (let i = 0; i < food.length; i++){
        answer += String(i + 1).repeat(Math.floor(food[i] / 2));
    }
    
    return answer + "0" + [...answer].reverse().join('');
}