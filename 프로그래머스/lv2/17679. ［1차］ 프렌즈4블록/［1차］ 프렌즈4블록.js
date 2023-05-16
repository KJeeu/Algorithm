function solution(m, n, board) {
    board = board.map(x => x.split(''));
    
    while(true){
        let found = [];
        
        //중복 찾기
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if(board[i][j] && board[i][j] === board[i][j-1] && board[i][j] === board[i-1][j] && board[i][j] === board[i-1][j-1]) found.push([i, j]);
            }
        }
    
    if (!found.length) return board.flat().filter(x => !x).length;
    
    //부수기
    found.forEach(x => {
        board[x[0]][x[1]] = 0;
        board[x[0]][x[1] - 1] = 0;
        board[x[0] - 1][x[1]] = 0;
        board[x[0] - 1][x[1] - 1] = 0;
    });
    
    //재정렬
    for (let i = m - 1; i > 0; i--){
        for(let j = 0; j < n; j++){
            if(board[i][j]) continue;
            for(let k = i - 1; k >= 0; k--){
                if(board[k][j]) {
                    board[i][j] = board[k][j];
                    board[k][j] = 0;
                    break;
                }
            }
        }
    }
    }
}