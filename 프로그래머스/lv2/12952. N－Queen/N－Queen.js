function solution(n) {
    let answer = 0;
    
    const isValid = (board, count) => {
        for(let i = 1; i < count; i++) {
            if (board[i] === board[count]) return false;
            if (Math.abs(i - count) === Math.abs(board[i] - board[count])) return false;
        }
        return true;
    }
    
    const dfs = (board, count) => {
        if(count === n) answer++;
        else {
            for(let i = 1; i <= n; i++) {
                board[count + 1] = i;
                if(isValid(board, count + 1)) dfs(board, count + 1);
            }
        }
    }
        
    for(let i = 1; i <= n; i++){
        const board = new Array(n + 1).fill(0);
        board[1] = i;
        dfs(board, 1);
    }
    
    return answer;
}