function solution(n, arr1, arr2) {
    let answer = [];
    let list = "";
    
    for(let i = 0; i < n; i++){
        let a = arr1[i].toString(2).padStart(n, '0');
        let b = arr2[i].toString(2).padStart(n, '0');
        for(let j = 0; j < n; j++){
            if (a[j] + b[j] === '00') list += ' ';
            else list += '#';
        }
        answer.push(list);
        list = "";
    }
    
    return answer;
}

// 문제풀이 : https://jeeumu.tistory.com/188