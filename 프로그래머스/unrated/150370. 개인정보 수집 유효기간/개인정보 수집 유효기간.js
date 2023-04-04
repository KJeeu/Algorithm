function solution(today, terms, privacies) {
    let t = terms.join(' ').split(' ');
    let kind = t.filter((x, i) => i % 2 === 0);
    let month = t.filter((x, i) => i % 2 !== 0);
    today = today.split('.').map(Number);
    let result = [];
    let count = 0;
    
    for (i of privacies){
        count++;
        
        let pri = i.split(' ');
        let mon = Number(month[kind.indexOf(pri[1])]);
        
        let priDay = pri[0].split('.').map(Number);
        let sum = priDay[1] + mon;
        
        if(sum > 12) {
            priDay[0] += Math.floor((sum - 1) / 12);
            priDay[1] = sum % 12 === 0 ? 12 : sum % 12;
        } else priDay[1] = sum;
        
        if(priDay[2] === 1) {
            if(priDay[1] === 1) {
                priDay[0] -= 1;
                priDay[1] = 12;
                priDay[2] = 28;
            }
            priDay[1] -= 1;
            priDay[2] = 28;
        } else priDay[2] -= 1;
        
        if(priDay[0] < today[0]) {
            result.push(count);
            continue;
        }
        
        if(priDay[0] === today[0]){
            if(priDay[1] < today[1]) {
                result.push(count);
                continue;
            } else if (priDay[1] === today[1] && priDay[2] < today[2]){
                result.push(count);
                continue;
            }
        }
    }
    
    return result;
}