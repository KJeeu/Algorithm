function solution(x, y, n) {
    if(x === y) return 0;
    
    const dp = Array(y+1).fill(1000000);
    
    dp[x] = 0;
    
    for(let i = x; i <= y; i++){
        if(dp[i] === 1000000) continue;
        
        if(i * 3 <= y) {
            dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
        }
        
        if(i * 2 <= y) {
            dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        }
        
        if(i + n <= y) {
            dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
        }
    }
    
    return dp[y] === 1000000 ? -1 : dp[y];
}