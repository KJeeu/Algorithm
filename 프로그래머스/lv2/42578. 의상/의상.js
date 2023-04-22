function solution(clothes) {
    const spy = new Map();
    
    for (let i of clothes){
        if(spy.has(i[1])) spy.get(i[1]).push(i[0]);
        else spy.set(i[1], [i[0]]);
    };
    
    let sum = 1;
    spy.forEach((value) => {
        sum *= value.length + 1;
    });
    
    return sum - 1;
}