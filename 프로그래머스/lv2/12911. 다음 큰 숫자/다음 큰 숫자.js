function solution(n) {
    let test = n;
    n = n.toString(2).split('').filter(x => x === '1').length;
    
    while (true) {
        test += 1;
        let testNumber = test.toString(2).split('').filter(x => x === '1').length;
        if(testNumber === n) return test;
    }
}