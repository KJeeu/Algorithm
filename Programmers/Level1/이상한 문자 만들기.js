function solution(s) {    
    let str = [...s];
    let answer = "";
    let count = 0;
    
    for(let i = 0; i < str.length; i++){
        if(str[i] !== ' ' && count % 2 === 0){
            answer += str[i].toUpperCase();
            count++;
        } else if(str[i] === ' ') {
            count = 0;
            answer += str[i];
        } else {
             answer += str[i].toLowerCase();
            count++;
        }
    }
    return answer;
}

/*
다른 풀이

let solution= s=> s.split(' ').map(el => el.split('').map((e,i) => i%2?e.toLowerCase():e.toUpperCase()).join('')).join(' ');
*/