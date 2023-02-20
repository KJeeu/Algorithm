const solution = (angle) => angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;

/*내가 위에 푼 삼항연산자보다 편한 풀이를 찾았다
filter를 이용하면 됨
*/
// function solution(angle) {
//     return [0, 90, 91, 180].filter(x => angle >= x).length;
// }