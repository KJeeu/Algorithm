function solution(arr) {
    const answer = [0,0];
    const len = arr.length;
    
    //분할
    const check = (x, y, length) => {
        const first = arr[x][y];
        const zone = Math.floor(length / 2);
        
        for(let i = x; i < x + length; i++){
            for(let j = y; j < y + length; j++){
                if(arr[i][j] !== first) {
                    check(x, y, zone);
                    check(x + zone, y, zone);
                    check(x, y + zone, zone);
                    check(x + zone, y + zone, zone);
                    
                    return;
                }
            }
        }
        
        answer[first]++;
    }
    
    check(0, 0, len);
    
    return answer;
}