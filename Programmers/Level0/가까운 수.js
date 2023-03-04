function solution(array, n) {
    let arr = array.sort((x, y) => x - y)
    const a = arr.map(x => Math.abs(n - x))
    const aMin = a.indexOf(Math.min(...a))
    return arr[aMin]
 }

 /*
sort()의 다중조건을 이용하여 풀 수 있다

function solution(array, n) {
    array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
    return array[0];
}

 */