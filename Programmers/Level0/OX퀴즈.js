function solution(quiz) {
    let answer = [];
    let q = [];
    let result = 0;
    
    for(let i = 0; i < quiz.length; i++){
        q = quiz[i].split(' ');
        if(q[1] === '-'){
            result = Number(q[0]) - Number(q[2]);
        } else result = Number(q[0]) + Number(q[2]);
        
        if(result === Number(q[4])) answer.push("O");
        else answer.push("X");
    }
    return answer;
}

/*
아래 다른 코드도 있었다

function solution(quiz) {
  return quiz
    .map((el) => el.split(" = "))
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X";
    });
}
 */