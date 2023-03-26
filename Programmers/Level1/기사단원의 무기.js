function solution(number, limit, power) {
    let list = 0;
    
    for(let i = 1; i <= number; i++){
        let num = 0;
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(j * j === i) num++;
            else if(i % j === 0) num += 2;
        };
        
        num > limit ? list += power : list += num;
    }
    
    return list;
}

//풀이과정 : https://jeeumu.tistory.com/201