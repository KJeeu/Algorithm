const solution = (dot) => dot[0] > 0 && dot[1] > 0 ? 1 : dot[0] < 0 && dot[1] > 0 ? 2 : dot[0] < 0 && dot[1] < 0 ? 3 : 4; 

/*
삼항연산자 이용해서 풀었다.
한줄로 써서 깔끔할 줄 알았는데 괜히 코드가 더러워졌다..
아래 똑같이 삼항연산자로 썼는데 깔끔한 풀이로 다시 바꿨다

function solution(dot) {
    return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
}
*/