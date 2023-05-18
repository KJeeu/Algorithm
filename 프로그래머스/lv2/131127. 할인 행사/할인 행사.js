function solution(want, number, discount) {
    let wantList = new Map();
    let wantLength = want.length;
    let answer = 0;
    
    for(let i = 0; i <wantLength; i++){
        wantList.set(want[i], number[i]);
    }
    
    for(let i = 0; i < discount.length - 9; i++){
        let list = new Map();
        let j = i + 10;
        
        for(let k = i; k < j; k++){
            let target = discount[k];
            if(list.has(target)) list.set(target, list.get(target) + 1);
            else list.set(target, 1);
        }
        
        let listLength = 0;
        
        wantList.forEach((value, key) => {
            if(list.has(key) && list.get(key) === value) {
                list.delete(key);
                listLength++;
            }
        })
        
        if(wantLength === listLength) answer++;
    }
    
    return answer;
}