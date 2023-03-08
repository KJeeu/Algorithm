function solution(keyinput, board) {
    //맵의 크기 정중앙이 [0, 0]이므로 이를 기준으로 가로, 세로 몇개의 칸수가 있는지 알아내기 위함
    const bx = Math.ceil(board[0] / 2) - 1;
    const by = Math.ceil(board[1] / 2) - 1;
    
    //각 방향키 좌표
    const mx = [0, 0, -1, 1];
    const my = [1, -1, 0, 0];
    const move = ["up", "down", "left", "right"]
    
    let dx = 0, dy = 0
    
    for(let i = 0; i < keyinput.length; i++){
        for(let j = 0; j < move.length; j++){
            if(keyinput[i] === move[j]){
                dx += mx[j]
                dy += my[j]
            }
            //맵의 크기 벗어날 경우
            if (dx < -bx || dy < -by || dx > bx || dy > by){
                    dx -= mx[j]
                    dy -= my[j]
            } else continue;
        }
    }
    return [dx, dy];
}