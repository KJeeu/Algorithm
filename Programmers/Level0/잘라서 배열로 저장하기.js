function solution(my_str, n) {
    let answer = []
    for (let i = 0; i < my_str.length; i += n){
        answer.push(my_str.slice(i, i+n))
    }
    return answer;
}

/*
정규표현식을 이용해서 푸는 방법도 있다

function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
*/