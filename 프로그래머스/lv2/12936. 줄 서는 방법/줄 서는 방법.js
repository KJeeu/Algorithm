function solution(n, k) {
    const arr = new Array(n).fill(1);
    for(let i = 1; i < n; i++) {
        arr[i] = arr[i - 1] + 1;
    }
    
    const answer = [];
    let num = k - 1;
    
    const factorial = (it) => {
        let first = 1;
        for(let i = 2; i <= it; i++) first *= i;
        return first;
    }
    
    while(arr.length) {
        if(num === 0){
            answer.push(...arr);
            break;
        }
        
        let fact = factorial(arr.length - 1);
        const index = Math.floor(num / fact);
        num = num % fact;
        
        answer.push(arr[index]);
        arr.splice(index, 1);
    }
    
    return answer;
}