function solution(spell, dic) {
    for(let i = 0; i < dic.length; i++){
        let count = 0;
        for(let j = 0; j < spell.length; j++){
            if(dic[i].includes(spell[j])) count++;
        } if(count === spell.length) return 1
    } return 2
}

/*
다른 풀이를 보니 some()을 이용해서 한줄로 푸는 방법도 있었다. 각 sort로 정렬 후에 같은지 비교해주는 식이 바로 직관적으로 이해되고 좋은 거 같다!

function solution(p, d) {
    return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}
*/