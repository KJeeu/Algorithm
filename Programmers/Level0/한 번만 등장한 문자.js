function solution(s) {
    return [...s].filter(x => s.lastIndexOf(x) === s.indexOf(x)).sort().join('');
}