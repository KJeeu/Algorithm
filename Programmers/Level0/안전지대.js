function solution(board) {
    const dx = [0, 0, 1, -1, -1, -1, 1, 1];
    const dy = [1, -1, 0, 0, -1, 1, -1, 1];
    let count = 0;
    
    for (let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === 1) {
                for(let k = 0; k < 8; k++){
                    let x = i + dx[k];
                    let y = j + dy[k];
                    if( x >= 0 && x < board.length && y >= 0 && y < board[i].length && board[x][y] === 0) board[x][y] = 2
                }
            }
        }
    }
    board.map(x => x.filter(y => y === 0 ? count ++ : 0));
    
    return count; 
}