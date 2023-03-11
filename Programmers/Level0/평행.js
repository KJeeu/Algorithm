function solution(dots) {
    let count = 0;
    
    function diff(a, b, c, d){
        let x = (b[1] - a[1]) / (b[0] - a[0]);
        let y = (d[1] - c[1]) / (d[0] - c[0]);
        
        if(x === y){
            count++;
        }
    }
    diff(dots[0], dots[1], dots[2], dots[3]);
    diff(dots[0], dots[2], dots[1], dots[3]);
    diff(dots[0], dots[3], dots[1], dots[2]);
    
    return count > 0 ? 1 : 0;
}
/*
선분 평행 = 기울기가 같다

기울기 = Y변화량(b[1] - a[1]) / X변화량(b[0] - a[0])

경우의 수 12 34 / 13 24 / 14 23
*/