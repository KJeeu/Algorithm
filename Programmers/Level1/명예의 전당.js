function solution(k, score) {
    let list = [];
    let answer = [];
    
    for(let i = 0; i < score.length; i++){
        if(list.length < k) list[i] = score[i];
        else if(score[i] > Math.min(...list)){
            list[list.indexOf(Math.min(...list))] = score[i];
        }
        answer.push(Math.min(...list));
    }
    return answer;
}