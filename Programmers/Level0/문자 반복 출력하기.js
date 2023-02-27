function solution(my_string, n) {
    return my_string.split('').map(x => x.repeat(n)).join('');
}
/*
my_string.split('')을 [...my_string]으로 사용 가능!
*/