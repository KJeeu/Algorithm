function solution(array, n) {
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === n) count++; 
    }
    return count;
}

/*
filter 사용
function solution(array, n) {
    return array.filter(x => x === n).length;
}
*/