function solution(skill, skill_trees) {
    // 선행스킬순서 skill 있다면 몇번째인지 넣어줌.그리고 그게 그 다음이 맞는지 확인
    let answer = 0;
    
    for (let i of skill_trees) {
        let list = [];
        let ok = '';
        for(let j of i) {
            //선행 스킬 순서 skill에 있다면
            let tf = skill.indexOf(j);
            if(tf !== -1 && list.length > 0) {
                //이전 선행 스킬
                let before = list[list.length - 1];
                    
                //순서 맞는지 여부
                if(before < tf && before === tf - 1) list.push(tf);
                else ok = 'YES';
            } else if (tf !== -1 && list.length === 0){
                if(tf === 0) list.push(tf);
                else ok = 'YES';
            }
        }
    if(ok !== 'YES') answer++;
    }
    
    return answer;
}