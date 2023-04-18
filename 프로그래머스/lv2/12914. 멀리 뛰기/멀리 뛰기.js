function solution(n) {
    //피오나치 수열
    let list = new Array(n+1).fill(0);
    list[0] = 1;
    list[1] = 1;
    
    for(let i = 2; i <= n; i++){
        list[i] = (list[i-2] + list[i-1]) % 1234567;
    }
    
    return list[n];
}