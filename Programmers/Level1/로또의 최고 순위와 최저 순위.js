function solution(lottos, win_nums) {
    let rank = [6, 6, 5, 4, 3, 2, 1];
    
    let max = lottos.filter(x => x === 0).length;
    let min = lottos.filter(x => win_nums.includes(x)).length;
    
    max += min;
    
    return [rank[max], rank[min]];
}

/*
let max = lottos.filter(x => x === 0).length;
위 코드를
let max = lottos.filter(x => !x).length;
로 가능하다. !0 === true이기 때문이다.
*/