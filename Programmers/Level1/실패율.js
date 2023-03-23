function solution(N, stages) {
    let count = [];
    
    for(let i = 1; i <= N; i++){
        let gameover= 0;
        let player = 0;
        
        gameover = stages.filter(x => x === i).length;
        player = stages.filter(x => i <= x).length;
        
        if(player === 0) count.push([i, 0]);
        else count.push([i, gameover/player]);
    }
    
    return count.sort((a, b) => b[1] - a[1]).map(x => x[0]);
}

//풀이과정 : https://jeeumu.tistory.com/199