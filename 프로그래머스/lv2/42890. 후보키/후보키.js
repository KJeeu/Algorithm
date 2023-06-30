//조합
function combination(arr, num) {
    const result = [];
    
    if(num === 1) return arr.map((x) => [x]);
    
    arr.forEach((fix, index, list) => {
        const fixed = list.slice(index + 1);
        const com = combination(fixed, num - 1);
        const att = com.map((x) => [fix, ...x]);
        
        result.push(...att);
    });
    
    return result;
}

//유일성
function isUniqueness(key, rel, num) {
    const set = new Set();
    
    rel.forEach((x) => {
        let string = '';
        key.forEach((k) => {
            string += x[k];
        });
        set.add(string);
    });
    
    return num === set.size;
}

//최소성
function isMinimality(comb, minimality) {
  let isMinimality = true;
  minimality.forEach((i) => {
    let cnt = 0;
    i.forEach((j) => {
      if (comb.indexOf(j) !== -1) cnt++;
    });
    if (cnt === i.length) isMinimality = false;
  });

  return isMinimality;
}

function solution(relation) {
    const arr = new Array(relation[0].length).fill().map((x, index) => (x = index));
    let list = [];
    const minimality = [];
    
    for (let i = 1; i <= relation[0].length; i++) {
        list = [...list, ...combination(arr, i)];
    }
    
    let answer = 0;
    list.forEach((x) => {
        if (isMinimality(x, minimality) && isUniqueness(x, relation, relation.length)) {
            answer++;
            minimality.push(x);
        }
    });
    
    return answer;
}