function solution(keymap, targets) {
    let answer = [];
    
    for(let i = 0; i < targets.length; i++){
        let sum = 0;
        
        for(let j = 0; j < targets[i].length; j++){
            let alpha = targets[i][j];
            let num = [];
            
            for(let k = 0; k < keymap.length; k++){    
                if([...keymap[k]].includes(alpha)){
                    num.push(keymap[k].indexOf(alpha) + 1);
                }
        }
            sum += Math.min(...num);
        }
        if(sum === Infinity) sum = -1;
        answer.push(sum);

    }
    
    return answer;
}