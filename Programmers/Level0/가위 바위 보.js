const solution = rsp => rsp.split('').map(x => x === '2' ? '0' : x === '0' ? '5' : '2').join('');

/*
나는 삼항연산자를 이용했지만 다른 사람이 푼 객체를 이용한 풀이도 좋았다.
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}
*/