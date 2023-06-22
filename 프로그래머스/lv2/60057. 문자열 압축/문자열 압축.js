function solution(s) {
    let answer = s.length;
    //최대 절반까지 비교
    for (let i = 1; i <= Math.floor(s.length/2); i++){
        let sum = ""; //임시 문자열
        
        for(let j = 0; j < s.length; j += i){
            const str1 = s.slice(j, i + j);
            let count = 1; //중복
            
            while(true) {
                j += i; //스타트지점 변경
                const str2 = s.slice(j, i + j);
                
                if(str1 === str2) {
                    count++;
                } else {
                    break;
                }
            }
            
            if (count >= 2) {
                sum += count + str1;
            } else {
                sum += str1;
            }
            j -= i; //다음 for문에서 증가됨
        }
        
        answer = Math.min(answer, sum.length);
    }
    
    return answer;
}