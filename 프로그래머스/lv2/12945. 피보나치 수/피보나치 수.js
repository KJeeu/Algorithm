function solution(n) {
    let list = [0, 1, 1];
    for (let i = 3; i <= n; i++){
        list.push(list[i-1] % 1234567 + list[i-2] % 1234567);
    }
    
    return list[n] % 1234567;
    //n이 큰 경우 n번째 피보나치 수는 자료형 범위를 벗어나기 때문에 오버플로우가 남. 이를 해결하기 위해 %1234567을 해주면서 오버플로우 안 나도록 함.
}