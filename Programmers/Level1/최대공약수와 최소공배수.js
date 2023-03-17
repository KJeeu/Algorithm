function solution(n, m) {
    function max(a, b){
        if(b === 0) return a;
        return max(b, a % b);
    }
    
    function min(a, b){
        return (a * b) / max(a, b) 
    }
    
    return [max(n, m), min(n, m)];
}

//유클리드 호제법으로 최대공약수(max), 최소공배수(min) 풀이