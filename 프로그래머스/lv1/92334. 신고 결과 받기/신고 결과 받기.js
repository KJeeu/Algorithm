function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(x => x.split(' '));
    
    //'신고 당한 유저' => 신고수
    let re = new Map();
    
    for(let [, i] of reports){
        re.set(i, re.get(i) + 1 || 1);
    }

    //`유저` => 메일수
    let mail = new Map();
    
    for(let [user, target] of reports){
        if(re.get(target) >= k){
            mail.set(user, mail.get(user) + 1 || 1)
        }
    }
    
    return id_list.map(x => mail.get(x) || 0);
}