function solution(numer1, denom1, numer2, denom2) {
    const a = (numer1 * denom2) + (numer2 * denom1)
    const b = denom1 * denom2;
    let count = 1;
    
    for(let i = 1; i <= b; i++){
        if(a%i === 0 && b%i ===0){
            count = i;        
        }
    }
    return [a/count, b/count];
}