function solution(sides) {
    const sides2 = sides.sort((a,b) => a-b);
    return sides[2] < sides[0] + sides[1] ? 1 : 2;
}