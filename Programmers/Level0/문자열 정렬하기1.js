function solution(my_string) {
    return my_string.split('').filter(x => !isNaN(x)).sort((a, b) => a - b).map(Number)
}