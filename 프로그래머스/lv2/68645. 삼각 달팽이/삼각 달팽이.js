function solution(n) {
    const answer = Array(n).fill().map((x, i) => Array(i + 1).fill(0));
    const size = n * (n + 1) / 2;
    
    //i = 세로, j = 가로, count = 숫자
    let [i, j, count] = [0, 0, 1];
    
    while (count <= size) {
        // 세로 채우기
        while (i < n && !answer[i][j]) {
            answer[i++][j] = count++;
        }
        i--, j++;
        
        // 가로 채우기
        while (j < n && !answer[i][j]) {
            answer[i][j++] = count++;
        }
        i--, j -= 2;
        
        // 상단으로 이동하며 채우기
        while (i > 0 && j > 0 && !answer[i][j]) {
            answer[i--][j--] = count++;
        }
        i += 2, j++;
    }
    
    return answer.flat();
}