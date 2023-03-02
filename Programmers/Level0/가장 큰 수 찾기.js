function solution(array) {
    const arrayCopy = [...array];
    const answer = array.sort((a, b) => a - b)[array.length-1];
    return [answer, arrayCopy.indexOf(answer)];
}

/*
Math.max를 이용하면 더 간단하게 풀 수 있다

function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}
*/