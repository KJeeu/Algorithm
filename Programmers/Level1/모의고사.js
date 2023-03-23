function solution(answers) {
    let a = "12345";
    let b = "21232425";
    let c = "3311224455";

    let abc = [0, 0, 0];
    let j = [0, 0, 0];
    let answer = [];
    
    for(let i = 0; i < answers.length; i++){
        if(a[j[0]] == answers[i]) abc[0] += 1;
        if(b[j[1]] == answers[i]) abc[1] += 1;
        if(c[j[2]] == answers[i]) abc[2] += 1;
        j[0] += 1;
        j[1] += 1;
        j[2] += 1;
        
        if(j[0] >= a.length) j[0] = 0;
        if(j[1] >= b.length) j[1] = 0;
        if(j[2] >= c.length) j[2] =0;    
    }
    
    const max = Math.max(...abc)
    for(i = 0; i < abc.length; i++){
        if(max === abc[i]) answer.push(i+1);
    }
    
    return answer;
}

//문제풀이 https://jeeumu.tistory.com/197