function solution(survey, choices) {
    let left = [3, 2, 1];
    let right = [5, 6, 7];
    let sur = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
    let arr = new Array(8).fill(0);
    let answer = "";
    
    for(let i = 0; i < choices.length; i++){
        let num = choices[i];
        let text = survey[i];
        
        if(left.includes(num)) arr[sur.indexOf(text[0])] += left.indexOf(num) + 1;
        else if(right.includes(num)) arr[sur.indexOf(text[1])] += right.indexOf(num) + 1;
    };
    
    for(let i = 0; i < arr.length; i += 2){
        if(arr[i] >= arr[i+1]) answer += sur[i];
        else answer += sur[i+1];
    };
    
    return answer;
}