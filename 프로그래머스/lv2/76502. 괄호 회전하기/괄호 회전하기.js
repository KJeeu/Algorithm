function solution(s) {
    let answer = 0;
    const list = ["[]", "()", "{}"];
            
    for(let i = 0; i < s.length; i++){ 
        s = [...s];
        let target = s.shift();
        s.push(target);
        
        let box = [];
        let isTrue = true;
        
        for(let j of s){
            if(j === '(' || j === '[' || j === '{') box.push(j);
            else {
                let p = box.pop();
                if(!list.includes(p+j)){
                    isTrue = false;
                    break;
                }
            }
        }
        if (isTrue && box.length === 0) answer++;
    }
    return answer;
}