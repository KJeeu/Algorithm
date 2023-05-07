function solution(maps) {
    const mapX = maps.length;
    const mapY = maps[0].length;
    const targetX = mapX - 1;
    const targetY = mapY - 1;
    
    const x = [0, 0, -1, 1];
    const y = [1, -1, 0, 0];
    
    let me = [];
    me.push([0, 0, 1]); //x좌표, y좌표, 이동
    
    while(me.length){
        const [meX, meY, move] = me.shift();
        
        if(meX === targetX && meY === targetY) return move;
        
        for(let i = 0; i < 4; i++){
            const nx = meX + x[i];
            const ny = meY + y[i];
            
            if(nx >= 0 && nx < mapX && ny >= 0 && ny < mapY && maps[nx][ny] === 1) {
                me.push([nx, ny, move + 1]);
                maps[nx][ny] = 0;
            }
        }
    }
    
    return -1;
}