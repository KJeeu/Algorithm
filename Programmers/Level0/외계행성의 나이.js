function solution(age) {
    return String(age).split('').map(x => "abcdefghij"[x]).join('');
}