function solution(s) {
    let ss = s.split(' ')
    for (let i = 0; i < ss.length; i++){
        if(ss[i] == 'Z'){
            ss[i] = -ss[i-1]
        }
    }
    return ss.map(Number).reduce((a, b) => a + b);
}

