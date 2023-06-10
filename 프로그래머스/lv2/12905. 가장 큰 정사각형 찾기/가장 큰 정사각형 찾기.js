function solution(board) {
    const row = board.length;
    const column = board[0].length;
    let answer = 0;
    
    if (row === 1 || column === 1) return 1;
    
    for (let i = 1; i < row; i++){
        for (let j = 1; j < column; j++){
            if(board[i][j] > 0) {
                const left = board[i][j - 1];
                const top = board[i - 1][j];
                const cross = board[i - 1][j - 1];
                
                board[i][j] = Math.min(left, top, cross) + 1;
                answer = Math.max(board[i][j], answer);
            }
        }
    }
    
    return answer * answer;
}