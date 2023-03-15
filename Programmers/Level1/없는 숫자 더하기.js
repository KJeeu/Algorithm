function solution(numbers) {
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    return num.filter(x => !numbers.includes(x)).reduce((a, b) => a + b);
}

