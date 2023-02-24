function solution(num_list) {
    const answer = [];
    const a = (num_list.filter(num => num%2 === 0)).length;
    const b = (num_list.filter(num => num%2 !== 0)).length;
    answer.push(a, b);
    return answer;
}

/*
바로 리턴하는 법도 있었다. 코드가 더 간결해짐
1)
function solution(num_list) {
    return [
        num_list.filter(num => num%2 === 0).length,
        num_list.filter(num => num%2 !== 0).length,
    ]
}

제일 놀랐던 풀이는 아래와 같다
배열과 인덱스를 잘 활용한 사례
2)
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}
*/