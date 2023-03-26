function solution(n, m, section) {
    let walls = new Array(n).fill(1);
    section.map(x => walls[x-1] = 0);
    let result = 0;
    
    while (true){
        let num = walls.indexOf(0);
        if(num === -1) break;
        for(let i = num; i < num + m; i++){
            walls[i] = 1;
        }
        result++;
    }
    console.log(section[n+1])
    return result;
}