function solution(n){
    return n.toString().split('').map(Number).reduce((a, b) => a + b);
}
/*
다른 풀이를 보니
굳이 toString을 쓰지 않고 n+""만으로도 숫자를 문자열로 바꿀 수 있다
*/