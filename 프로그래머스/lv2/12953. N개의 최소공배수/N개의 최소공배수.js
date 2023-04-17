function solution(arr) {
    let max = Math.max(...arr);
    let i = 1;

    while(true){
        let a = max * i;
        let answer = arr.filter(x => a % x === 0).length;
        if(answer === arr.length) return a;
        i++;
    }
}