function solution(s) {
    return (s.length === 4 || s.length === 6) && !(s.split('').map(x => isNaN(x)).includes(true))? true : false;
}