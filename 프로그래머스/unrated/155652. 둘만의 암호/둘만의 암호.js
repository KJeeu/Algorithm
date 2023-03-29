function solution(s, skip, index) {
    let alph = "abcdefghijklmnopqrstuvwxyz";
    console.log(alph.length)
    let answer = "";
    
    [...skip].map(x => alph = alph.replace(x, ""));
    
    for(let j = 0; j < s.length; j++){
        let i = alph.indexOf(s[j]) + index;
        while(alph.length <= i) i = i - alph.length;
        answer += alph[i];
    }
    
    return answer;
}