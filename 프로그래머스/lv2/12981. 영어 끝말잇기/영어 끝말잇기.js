function solution(n, words) {
    let count = 0;
    let last = '';
    let first = '';
    let sum = [];
    
    for(let i = 0; i < words.length; i += n){
        let test = words.slice(i, i + n);
        count++;
        
        for(let j = 0; j < test.length; j++){
            if(sum.includes(test[j])) return [j + 1, count];
            
            if(last === '') {
                last = test[j].split('')[test[j].length - 1];
                sum.push(test[j]);
                continue;
            }
            
            first = test[j].split('')[0];
            
            if(last === first){
                last = test[j].split('')[test[j].length - 1];
            } else {
                return [j + 1, count];
            }
            
            sum.push(test[j]);
        }
    } return [0, 0];
}