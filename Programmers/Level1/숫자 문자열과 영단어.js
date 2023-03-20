function solution(s) {
    let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for(let i = 0; i< num.length; i++){
        if(s.includes(num[i])) s = s.replaceAll(num[i], i);
    }
    
    return Number(s);
}

/*
다른 풀이를 보니 split과 join으로 간단하게 푼 코드도 있었다.
arr에 numbers에 포함된 문자열을 기준으로 배열로 만들어주고
다시 join으로 문자열로 만들어준다.
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
*/