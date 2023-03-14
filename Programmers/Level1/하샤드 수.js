function solution(x) {
    let arr = String(x);
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
        sum += Number(arr[i]);
    }
    
    return x % sum === 0? true : false;
}
/*
아래와 같이 문자열로 형변환 없이 숫자로만 푼 풀이도 있었다

function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10;
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}
*/