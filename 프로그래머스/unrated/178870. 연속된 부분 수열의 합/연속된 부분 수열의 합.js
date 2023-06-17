function solution(sequence, k) {
    let [x, y] = [0, 0];
    let sum = sequence[x]; //현재 합
    const list = [];
    
    if (sequence.includes(k)) return [sequence.indexOf(k), sequence.indexOf(k)];
    else {
        while (y < sequence.length){
            if (sum < k) {
                sum += sequence[++y];
            } else if (sum > k) {
                sum -= sequence[x++];
            } else {
                list.push([x, y]);
                sum += sequence[++y];
                sum -= sequence[x++];
            }
        }
    }
    // list 중 가장 차가 적은 것 return
    return list.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]))[0];
}