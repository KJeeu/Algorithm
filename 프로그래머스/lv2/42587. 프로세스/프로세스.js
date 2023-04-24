function solution(priorities, location) {
    let list = [];
    let count = 0;
    
    for(let i = 0; i < priorities.length; i++){
        list.push(i);
    }
    
    while(true){
        let target = priorities.shift();
        if (Math.max(...priorities) <= target) {
            count++;
            if(list[0] === location) return count;
            list.shift();
        }
        else {
            priorities.push(target);
            let t = list.shift();
            list.push(t);
        }
    }
}