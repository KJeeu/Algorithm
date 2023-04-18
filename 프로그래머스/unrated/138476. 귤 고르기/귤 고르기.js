function solution(k, tangerine) {
    const count = [...new Set(tangerine)];
    const box = new Array(count.length).fill(0);
    
    for(let i = 0; i < tangerine.length; i++){
        box[count.indexOf(tangerine[i])] += 1;
    }

    box.sort((a, b) => b - a);
    
    let answer = 0;
    let sum = 0;
    
    for (let j of box) {
        answer++;
        sum += j;
        if (sum >= k) break;
    }
  return answer;
}