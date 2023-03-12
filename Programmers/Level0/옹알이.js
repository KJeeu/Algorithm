function solution(babbling) {
    const x = ["aya", "ye", "woo", "ma"];
    let result = 0; 
    
    for (i of babbling){
        for(j of x){
            let text = String(i).replace(j, '1');
            i = text;
        }
        let re = i.replaceAll(1, '')
        if (re === '') result++;
    }
    
    return result;   
}