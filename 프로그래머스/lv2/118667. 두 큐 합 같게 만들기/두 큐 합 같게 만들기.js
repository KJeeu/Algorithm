function solution(queue1, queue2) {
    let x = queue1.reduce((a, b) => a + b, 0);
    let y = queue2.reduce((a, b) => a + b, 0);
    const xy = (x + y) / 2;
    const q = [...queue1, ...queue2];
    let pointer1 = 0;
    let pointer2 = queue1.length;
    
    for(let i = 0; i < queue1.length * 3; i++){
        if (x === xy) return i;
        
        if (x > xy) {
            x = x - q[pointer1++ % q.length];
        } else {
            x = x + q[pointer2++ % q.length];
        }
    }
    
    return -1;
}