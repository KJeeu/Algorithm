function solution(t, p) {
    let answer = [];
    
    for(let i = 0; i < t.length; i++){
        let num = t.slice(i, i + p.length);
        if(num.length === p.length) answer.push(Number(num));
    }
    
    return answer.filter(x => x <= Number(p)).length;
}