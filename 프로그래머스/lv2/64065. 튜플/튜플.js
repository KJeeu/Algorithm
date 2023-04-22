function solution(s) {
    let step0 = s.replaceAll('{', '').replaceAll('}', '');
    let step1 = step0.split(',').map(Number);
    let answer = [...new Set(step1)];
    
    let list = new Map();
    for(let i of answer){
        list.set(i, step1.filter(x => x === i).length);
    }
    
    const listSort = new Map([...list].sort((a, b) => b[1] - a[1])); 
    
    let answerSort = [];
    listSort.forEach((value, key) => answerSort.push(key));
    
    return answerSort;
}