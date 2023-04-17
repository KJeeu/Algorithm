function solution(n,a,b){
    while (true) {
        let sum = n/2;
        
        if((a <= sum && b > sum) || (b <= sum && a > sum)){
            return n.toString(2).length - 1;
        } else if(a > sum && b > sum) {
            a -= sum;
            b -= sum;
        }
        n = sum;
    }
};