function solution(p) {
    //1 
    if (!p) return '';
    
    let answer = '';
    let left = 0;
    let right = 0;
    
    //균형잡힌 괄호 문자열 확인
    const check = (it) => {
        let count = 0;
        
        for(let i = 0; i < it.length; i++){
            if (it[i] === '(') {
                count++;
            } else {
                if(count === 0) return false;
                count--;
            }
        }
        return true;
    }
    
    for(let i = 0; i < p.length; i++){
        if (p[i] === '(') {
            left++;
        } else right++;
        
        //2
        let u = p.slice(0, i + 1);
        
        if(left === right) {
            if(check(u)) {
                //3  3-1
                answer = u + solution(p.slice(i + 1));
                return answer;
            } else {
                //4  4-1  4-2   4-3
                answer = '(' + solution(p.slice(i + 1)) + ')';
                
                //4-4
                for(let j = 1; j < i; j++){
                    if(p[j] === '(') {
                        answer += ')'
                    } else answer += '(';
                }
            }
            //4-5
            return answer;
        }
    }
}