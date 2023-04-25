function solution(str1, str2) {
    //대소문자무시(모두 대문자로)
    str1 = [...str1.toUpperCase()];
    str2 = [...str2.toUpperCase()];

    let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let s1 = [];
    let s1str = [];
    let s2 = [];
    let s2str = [];
    
    // 입력으로 들어온 문자열 2글자씩 끊음
    for (let i = 0; i < str1.length - 1; i++){
        if(alpha.includes(str1[i]) && alpha.includes(str1[i+1])) s1str.push(s1.length);
        s1.push(str1[i] + str1[i+1]);
    };
    
    for (let i = 0; i < str2.length - 1; i++){
        if(alpha.includes(str2[i]) && alpha.includes(str2[i+1])) s2str.push(s2.length);
        s2.push(str2[i] + str2[i+1]);
    };
    
    let str1overlap = new Map();
    let str2overlap = new Map();
    
    //영문자만 가능 + 겹치는지 여부
    for (let i of s1str){
        let target = s1[i];
        if(str1overlap.has(target)) str1overlap.set(target, str1overlap.get(target) + 1);
        else str1overlap.set(target, 1);
    }
    
    for (let i of s2str){
        let target = s2[i]
        if(str2overlap.has(target)) str2overlap.set(target, str2overlap.get(target) + 1);
        else str2overlap.set(target, 1);
    }
    
    let s1list = Array.from(str1overlap.keys());
    let s2list = Array.from(str2overlap.keys());
    
    let sum = 0;
    let inter = 0;
    
    for(let i of s1list){
        //교집합, 합집합
        if(s2list.includes(i)) {
            inter += Math.min(str1overlap.get(i), str2overlap.get(i));
            sum += Math.max(str1overlap.get(i), str2overlap.get(i));
        } else {
            sum += str1overlap.get(i);
        }
    };
    
    for(let i of s2list){
        if(!s1list.includes(i)) sum += str2overlap.get(i);
    }
    
    if (sum === 0 && inter === 0) return 65536;
    return Math.floor((inter / sum) * 65536);
    
}