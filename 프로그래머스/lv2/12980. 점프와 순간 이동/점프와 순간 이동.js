function solution(n) {
    let count = 0;
    
    while(n !== 0) {
        if (n % 2 !== 0) {
            n--;
            count++;
        }
        else n /= 2;
    }
    
    return count;
    // return [...n.toString(2)].filter(x => x === '1').length;
}