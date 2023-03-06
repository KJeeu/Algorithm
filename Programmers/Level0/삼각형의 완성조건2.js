function solution(sides) {
    let answer = 0;
    let num = Math.max(...sides);
    
    for (let i = 0; i < sides.reduce((a, b) => a+b); i++){
        if (Math.min(...sides) + i > num) ++answer
        else if (i > num) ++answer
    }
    return answer;
}

// 1) sides에서 큰 변이 있는 경우 2) 새로 주어지는 변의 길이가 클 경우