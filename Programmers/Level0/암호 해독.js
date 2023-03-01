function solution(cipher, code) {
    let count = 0;
    let answer = [];
    for (let i = 1; i <= cipher.length; i++){
        if(count <= cipher.length) {
            answer.push(cipher[code*i - 1])
            count = code*i - 1
        }
    }
    return answer.join('');
}
/*
function solution(cipher, code) {
    var answer = "";
    for (let i = code - 1; i < cipher.length; i += code) {
      answer += cipher[i];
    }
    return answer;
  }
*/