function solution(A, B) {
    let a = A.split('');
    
    for (let i = 0; i < A.length; i++){
        if(A === B) return 0;
        a.unshift(a.pop());
        
        if(a.join('') === B) return i+1;
    } return -1;
}

/*
다른 풀이를 보니 한줄로 가능하다

let solution=(a,b)=>(b+b).indexOf(a);
 */