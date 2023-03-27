function solution(cards1, cards2, goal) {
    while (goal.length > 0) {
        if(goal[0] === cards1[0]){
            goal.shift();
            cards1.shift();
        } else if (goal[0] === cards2[0]){
            goal.shift();
            cards2.shift();
        } else return "No";
    }
    
    return "Yes";
}

/*
다른 풀이를 보니 내 풀이랑 유사하지만 아래 풀이는 goal을 수정할 필요가 없다
function solution(cards1, cards2, goal) {
    for(const s of goal) {
        if(cards1[0] == s) {
            cards1.shift();
        } else if(cards2[0] == s) {
            cards2.shift();
        } else {
            return "No"
        }
    }

    return "Yes";
}
*/