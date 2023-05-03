function solution(n, t, m, p) {
    let num = 0;
    let numList = [];
    let answer = '';
    
    while(numList.length < t * m){
        numList.push(...num.toString(n).split(''));
        num++;
    }
    
    for(let i = 0; i < t * m; i+=m){
        answer += numList[i+p-1].toUpperCase();
    }
    
    return answer.slice(0, t);
}