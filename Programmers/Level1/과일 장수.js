function solution(k, m, score) {
    let box = 0;
    let count = m-1;
    score.sort((a, b) => b - a); 
    
    for (let i = 1; i <= Math.floor(score.length / m); i++){
        box += score[count] * m;
        count += m;
    }
    
    return box;
}

//문제풀이 : https://jeeumu.tistory.com/200