function solution(elements) {
    let answer = new Set();
    
    //연속 부분 개수
    for(let i = 1; i <= elements.length; i++){
        let sum = 0;
        
        //연속 부분 시작
        for(let j = 0; j <= elements.length; j++){
            if(j === 0) { //초기 설정
                for(let k = 0; k < i; k++){
                    sum += elements[k];
                }
            }
            else {
                sum -= elements[j - 1];
                sum += elements[(j + i - 1) % elements.length]
            }
            
            answer.add(sum);
        }
    }
    
    return answer.size;
}