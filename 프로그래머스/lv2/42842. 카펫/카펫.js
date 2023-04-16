function solution(brown, yellow) {
    let sum = brown + yellow;
    
    for(let i = 3; i < brown; i++){
        let j = Math.floor(sum/i);
        
        if((i-2)*(j-2) === yellow) return [j, i];
    }
}