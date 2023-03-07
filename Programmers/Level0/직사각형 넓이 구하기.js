function solution(dots) {
    const x = Math.max(...dots.map(x => x[0])) - Math.min(...dots.map(x => x[0]))
    const y = Math.max(...dots.map(y => y[1])) - Math.min(...dots.map(y => y[1]))
    return x * y;
}