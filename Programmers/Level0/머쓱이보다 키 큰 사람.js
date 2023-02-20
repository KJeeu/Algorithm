function solution(array, height) {
    return array.filter(x => height < x).length;
}