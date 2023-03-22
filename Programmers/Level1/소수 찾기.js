function solution(n) {
    const arr = new Array(n+1).fill(true);

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(arr[i] === true){
            let j = 2;
            while (i * j <= n){
                arr[i * j] = false;
                j++;
            }
        }
    }
    
    return arr.filter(x => x === true).length - 2;
}

//풀이과정 : https://jeeumu.tistory.com/196