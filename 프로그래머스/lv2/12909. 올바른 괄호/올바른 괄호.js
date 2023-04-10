function solution(s){
    let now = [];
    s = s.split('');
    
    while (0 < s.length) {
        let target = s.pop();
        if(now === '') now.push(target);
        
        if(target === '('){
            if(now[now.length-1] === ')') now.pop();
            else now.push(target);
        }
        else now.push(target);
    }
    return now.length === 0 ? true : false;
}