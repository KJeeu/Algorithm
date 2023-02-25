function solution(money) {
    let answer = [];
    const buy = Math.floor(money / 5500);
    const change = money % 5500;
    answer.push(buy, change);
    return answer;
}