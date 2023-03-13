function solution(s){
    let str = s.toLowerCase();
    let pc = 0;
    let yc = 0;
    for(let i = 0; i < s.length; i++){
        if(str[i] === 'p') pc++;
        else if(str[i] === 'y') yc++;
    }
    return pc === yc ? true : false;
}
/*
아래 풀이가 직관적이고 좋았다.

function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

*/