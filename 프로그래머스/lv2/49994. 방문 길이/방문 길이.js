function solution(dirs) {
    let map = new Array(11).fill(0).map(() => new Array(11).fill(0));
    const go = ['U', 'D', 'R', 'L'];
    const goX = [-1, 1, 0, 0];
    const goY = [0, 0, 1, -1];
    let x = 5;
    let y = 5;
    let answer = 0;
    let k = '';
    
    for(let i of dirs){
        let dir = go.indexOf(i);
        let nx = x + goX[dir];
        let ny = y + goY[dir];
        
        if(nx > -1 && nx < 11 && ny > -1 && ny < 11){
            x = nx;
            y = ny;
            
            if(i === 'U') k ='D'
            else if(i === 'D') k = 'U'
            else if(i === 'R') k = 'L'
            else k = 'R'
            
            if(map[nx][ny] === 0) {
                answer++;
                map[nx][ny] = i;
                map[nx - goX[dir]][ny - goY[dir]] += k;
            } else if(!(map[nx][ny].includes(i))) {
                //같은 블록이라도 방향에 따라 카운트됨
                answer++;
                map[nx][ny] += i;
                map[nx - goX[dir]][ny - goY[dir]] += k;
            }
        }
    }
    
    return answer;
}