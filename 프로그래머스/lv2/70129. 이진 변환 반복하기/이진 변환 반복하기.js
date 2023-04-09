function solution(s) {
    let count = 0;
    let sum = 0;
    
    while (true) {
        let ss = s.split('').filter(x => x === '1').join('');
        sum += s.length - ss.length;
        s = ss.length.toString(2);
        count++;
        
        if(s === '1') return [count, sum];
    }
}