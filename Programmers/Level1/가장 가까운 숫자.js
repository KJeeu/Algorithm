function solution(s) {
    let copy = [];
    let answer = [];
    s = [...s];
    
    for(let i = 0; i < s.length; i++){
        if(i === 0) answer[i] = -1;
        else{
            for(let j = 0; j < i; j++){
                copy[j] = s[j];
            }
            if(!(copy.includes(s[i]))) answer[i] = -1;
            else answer[i] = i - copy.lastIndexOf(s[i])
        }
    }
    return answer;
}

//문제풀이 : https://jeeumu.tistory.com/195