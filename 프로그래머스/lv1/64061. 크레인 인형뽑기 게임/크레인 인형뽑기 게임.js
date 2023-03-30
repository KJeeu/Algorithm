function solution(board, moves) {
    let basket = [];
    let count = 0;
    
    for (let i of moves){
        for (let j = 0; j < board.length; j++){
            let pull = board[j][i-1];
            if(pull !== 0) {
                if(basket[basket.length - 1] === pull) {
                    count += 2;
                    basket.pop();
                }
                else basket.push(pull);
                board[j][i-1] = 0;
                break;
            }
        }
    }
    return count;
}