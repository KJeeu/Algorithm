function solution(n) {
    let i = 1;
    while(true){
        let result = 1;
        
        for (let j = i; j > 0; j--){
            result *= j
        }
        if (result <= n){
            i++;
        } else {
            return i - 1;
        }
    }
}

/*
아래와 같이 간단하게 풀기 가능하다

function solution(n) {
    let i = 1;
    let f = 1;
    while (f*i < n) f*=++i;
    return i;
}
*/