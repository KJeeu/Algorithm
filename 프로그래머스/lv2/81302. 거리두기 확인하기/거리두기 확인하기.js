function solution(places) {
    const answer = [];
    for (const list of places){
        answer.push(check(list));
    }
    return answer;
}

const check = (it) => {
    const arr = it.map((x) => [...x]);
    const x = [1, 0, -1, 0];
    const y = [0, 1, 0, -1];
    
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            const target = arr[i][j];
            
            if(target === 'P'){
                for(let k = 0; k < 4; k++){
                    if(i + x[k] >= 0 && j + y[k] >= 0 && i + x[k] < 5 && j + y[k] < 5 && arr[i+x[k]][j+y[k]] === 'P') {
                        return 0;
                    }
                }
            }
            
            if(target === 'O'){
                let count = 0;
                for(let k = 0; k < 4; k++){
                    if(i + x[k] >= 0 && j + y[k] >= 0 && i + x[k] < 5 && j + y[k] < 5 && arr[i+x[k]][j+y[k]] === 'P') {
                        count++;
                    }
                    if(count > 1) {
                    return 0;
                }
                }
            }
        }
    }
    return 1;
}