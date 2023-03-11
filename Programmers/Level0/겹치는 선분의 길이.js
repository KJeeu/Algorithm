function solution(lines) {
    let answer = 0;
    let map = new Array(200).fill(0);
    
    for(let i = 0; i < lines.length; i++){
        let x = lines[i][0];
        let y = lines[i][1];
        
        for(let j = x; j < y; j++){
            map[j + 100] += 1;
        }
    }
    
    for(let i of map){
        if(i > 1) answer++;
    }
    
    return answer;
}