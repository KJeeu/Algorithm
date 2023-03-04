function solution(i, j, k) {
    return [...Array(j - i + 1).fill(0).map(x => i++).map(String).join('')].filter(x => x === k.toString()).length
}

/*
나와 다른 방식으로 푼 코드도 있다.

function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }

    return a.split(k).length-1;
}

*/