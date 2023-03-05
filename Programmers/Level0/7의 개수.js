function solution(array) {
    return [...array.join('')].filter(x => x === '7').length;
}

/*
아래와 같이 푸는 방법도 있었다

function solution(array) {
    return array.join('').split('7').length-1;
}
 */