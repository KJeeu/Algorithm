function solution(before, after) {
    let count = 0;
    for(let i = 0; i < before.length; i++){
        if(after.includes(before[i])){
            count++;
            after = after.replace(before[i], " ")
        }
    }
    return count === after.length ? 1 : 0;
}
/*
내가 복잡하게 풀었다
아래와 같이 한줄로 끝낼 수 있다
각 before와 after를 sort()로 정렬해서 같는지 비교를 생각못했었다

function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}
*/