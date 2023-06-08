function solution(expression) {
    let order = [];
    let num = [];
    let numList = [];
    let answer = 0;
    expression = [...expression];   
    
    //numList에 ['숫자', '연산자']
    expression.forEach((it, index) => {
        if (isNaN(it)) {
            numList.push(num.join(''));
            num = [];
            numList.push(it);
            if(!order.includes(it)) order.push(it);
        } else {
            num.push(it);
        }
        
        if(index === expression.length - 1) {
            numList.push(num.join(''));
        }
    })
    
    //계산
    const calc = (list, first) => {
        let calcList = [];
        list.forEach((x, index) => {
            if (x === first) {
                let left = Number(calcList.pop());
                let right = Number(list[index + 1]);
                if(first === '+'){
                    calcList.push(left + right);
                } else if (first === '-'){
                    calcList.push(left - right);
                } else calcList.push(left * right);
            } else {
                if(list[index-1] !== first) calcList.push(x);
            }
        })
        return calcList;
    }
    
    order.forEach((it, index) => {
        let step = calc(numList, it);
        
        if(order.length === 1) {
          answer = Math.max(answer, Math.abs(step));
        } else if(order.length === 2) {
            answer = Math.max(answer, Math.abs(calc(step, order[(index + 1) % 2])));
        } else {
            answer = Math.max(answer, Math.abs(...calc(calc(step, order[(index + 1) % 3]), order[(index + 2) % 3])));
            answer = Math.max(answer, Math.abs(...calc(calc(step, order[(index + 2) % 3]), order[(index + 1) % 3])));
        }
    });
    
    return answer;
}