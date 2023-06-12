function solution(rows, columns, queries) {
    const answer = [];
    
    //행렬 생성
    let list = new Array(rows).fill(0).map(() => new Array(columns).fill(1));
    let number = 1;
    for(let i = 0; i < list.length; i++){
        for(let j = 0; j < list[0].length; j++){
            list[i][j] = number++;
        }
    }
    
    //회전
    queries.forEach((it) => {
        let [a, b, c, d] = it.map((x) => x - 1);
        let num = [];
        
        let before = list[a][b];
        num.push(before);
        
        // 오른쪽
        for(let i = b + 1; i <= d; i++){
            let after = list[a][i];
            list[a][i] = before;
            before = after;
            num.push(before);
        }
        
        // 아래
        for(let i = a + 1; i <= c; i++){
            let after = list[i][d];
            list[i][d] = before;
            before = after;
            num.push(before);
        }
        
        // 왼쪽
        for(let i = d - 1; i >= b; i--){
            let after = list[c][i];
            list[c][i] = before;
            before = after;
            num.push(before);
        }
        
        // 위
        for(let i = c - 1; i >= a + 1; i--){
            let after = list[i][b];
            list[i][b] = before;
            before = after;
            num.push(before);
        }
        
        list[a][b] = before;
        answer.push(Math.min(...num));
    });
    
    return answer;
}