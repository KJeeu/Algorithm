function solution(x, n) {
    let answer = [];
    let i = x;
    while (answer.length < n) {
        answer.push(i);
        i += x;
    }
    return answer;
}
/*
나는 딱 정석대로 풀었고 아래 다른 코드를 보니 한줄로 풀 수 있다는 걸 깨달았다.

function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

먼저 n개만큼 배열을 x로 채워주고 인덱스값+1 (처음 인덱스는 0이므로) * 각 요소로 곱해준다..
*/