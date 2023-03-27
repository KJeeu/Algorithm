function solution(babbling) {
    const speaking = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    for(let i = 0; i < babbling.length; i++){
        let answer = babbling[i]
        
        for(let j = 0; j < speaking.length; j++){
            if (answer.includes(speaking[j].repeat(2))) break;
            answer = answer.split(speaking[j]).join(" ");
        }
        if(answer.split(" ").join("").length === 0) count++;
    }
    return count;
}

//풀이참고 : https://jeeumu.tistory.com/204