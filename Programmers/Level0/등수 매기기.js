function solution(score) {
    let x = score.map(x => (x[0] + x[1]) / 2);
    let copy = [...x].sort((a, b) => b - a)
    return x.map(x => copy.indexOf(x) + 1);
}