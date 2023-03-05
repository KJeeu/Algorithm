function solution(numbers) {
    const num = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    
    num.forEach((x, index) => {
        numbers = numbers.replaceAll(x, index);
    })
    
    return Number(numbers);
}

/*
다른 풀이를 보니 아래 reduce()를 이용해서 푸는 방법도 있다

var solution=n=>Number(['zero','one','two','three','four','five','six','seven','eight','nine'].reduce((t,s,i)=>t.replaceAll(s,i),n))
*/