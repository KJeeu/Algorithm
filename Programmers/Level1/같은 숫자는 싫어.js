function solution(arr) {
    let answer = [];
    
    arr.forEach((item, index, a) =>{
        if(index === 0) answer.push(item);
        else if(a[index - 1] !== item) answer.push(item);
    })
    return answer;
}

// 문제풀이 과정 : https://jeeumu.tistory.com/182