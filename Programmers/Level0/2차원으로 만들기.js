function solution(num_list, n) {
    let answer = new Array(num_list.length / n).fill(0).map(() => new Array(n));
    let num = 0;
    for (let i = 0; i < num_list.length / n; i++){
        for (let j = 0; j < n; j++){
            answer[i][j] = num_list[num++];
        }
    }
    return answer;
}

/*
새로운 2차원 배열 생성 후에 값을 대입하는 부분을 이중 for문을 이용하여 복잡하게 풀었다..
아래와 같이 2차원 배열 생성할 때 splice()를 이용해서 한줄로 만들 수 있다.

function solution(num_list, n) {
    return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n))
}
*/