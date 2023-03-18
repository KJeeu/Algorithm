function solution(d, b) {
    return d.sort((x, y) => x - y).filter( x => (b -= x) >= 0).length;
}