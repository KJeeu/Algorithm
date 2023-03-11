function solution(num, total) {
    let result = [];
    let answer = Math.ceil(total / num - Math.floor(num / 2));
    
    for(let i = 0; i < num; i++){
        result.push(answer+i);
    }
    
    return result;
}