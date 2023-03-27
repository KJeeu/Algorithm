function solution(X, Y) {
    let answer = "";
    X = [...X];
    Y = [...Y];
    
    for(let i = 9; i >= 0; i--){
        const x = X.filter(x => Number(x) === i).length;
        const y = Y.filter(y => Number(y) === i).length;
        answer += String(i).repeat(Math.min(x, y));
    }
    
    if(answer === "") return "-1";
    if(Number(answer) === 0) return "0";
    
    return [...answer].join('');
}

//풀이과정 : https://jeeumu.tistory.com/203