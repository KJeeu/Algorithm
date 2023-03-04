function solution(my_string) {
    return [...my_string].map(x => isNaN(x) ? "/" : x).join("").split("/").map(Number).reduce((a, b) => a + b);
}

/*
아래와 같이 정규표현식으로 푸는 방법도 있다.

function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}
*/