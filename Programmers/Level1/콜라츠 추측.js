function solution(num) {
    let count = 0;
    if(num === 1) return 0;
    
    while (num > 1) {
        if(num % 2 === 0) {
            num /= 2;
            count++;
        } else {
            num = num * 3 + 1;
            count++;
        };
        
        if(count === 500) return -1;    
    } return count;
}

/*
if문을 삼항 연산자로 더 깔끔하게 쓸 수 있었다

function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}
 */