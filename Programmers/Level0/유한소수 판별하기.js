function solution(a, b) {
    const x = (a, b) => {
        if(b===0) return a;
        return x(b, a % b);
    }
    
    b = b / x(a, b);
    
    while (b % 2 === 0) b = b / 2;
    while (b % 5 === 0) b = b / 5;
    
    return b === 1 ? 1 : 2;
    
    
}

/*
function solution(a, b) {
    return Number((a/b).toFixed(10)) == a/b ? 1 : 2
}
*/