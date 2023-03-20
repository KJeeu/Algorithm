function solution(a, b) {
    let mon = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    let day = [31,29,31,30,31,30,31,31,30,31,30,31];
    let dd = 0;
    
    if(a === 1) return mon[b % 7 - 1];
    else dd = day.slice(0, a - 1).reduce((x, y) => x + y) + b;
    return mon[dd % 7 === 0 ? 6 : dd % 7 - 1];
}

//문제풀이 : https://jeeumu.tistory.com/192