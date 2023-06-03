function solution(topping) {
    let answer = 0;
    let chulsoo = new Set();
    let sibling = new Set();
    let count = new Array(10001).fill(0);
    
    topping.map(x => {
        chulsoo.add(x);
        count[x]++;
    })
    
    topping.map(x => {
        if(count[x] >= 1) count[x]--;
        if(count[x] === 0) chulsoo.delete(x);
        sibling.add(x);
        
        if(sibling.size === chulsoo.size) answer++;
    })
    
    return answer;
}