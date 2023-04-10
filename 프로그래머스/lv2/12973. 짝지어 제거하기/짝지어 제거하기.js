function solution(s) {
    let copy = [];
    
    for(let i of s){
        copy.push(i);
        if(copy[copy.length - 1] === copy[copy.length - 2]){
            copy.pop();
            copy.pop();
        }
    }
    
    return copy.length === 0 ? 1 : 0;
}