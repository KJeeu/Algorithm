function solution(n) {
    const m = [];
    let i = 1;
    
    while (true) {
        if (i % 3 !== 0 && !(String(i).includes('3'))) m.push(i);
        i++;
        
        if(m[99] != undefined) return m[n - 1];
    }
}
