function solution(arr) {
    let answer = arr.filter(x => x !== Math.min(...arr));
    return answer.length === 0 ? [-1] : answer;
}

/*
처음 제출한 코드는 위의 코드 였으나
통과가 되긴 했는데 테스트1에서 생각보다 시간이 많이 걸려서
다시 아래로 수정하였더니 시간이 단축되었다!

function solution(arr) {
    const min = Math.min(...arr);
    return arr.length === 0 ? [-1] : arr.filter(x => x !== min)
}
*/