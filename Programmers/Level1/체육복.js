function solution(n, lost, reserve) {
    let student = new Array(n).fill(1);
    reserve.map(x => student[x - 1] = 2);
    lost.map(x => student[x - 1] -= 1);
    
    lost.sort((a, b) => a - b);
    
    for(let i = 0; i < lost.length; i++){
        if(student[lost[i]-2] === 2) {
            student[lost[i]-2] = 1;
            student[lost[i]-1] = 1;
        }
        else if(student[lost[i]] === 2) {
            student[lost[i]] = 1;
            student[lost[i]-1] = 1;
        }
    }
    return student.filter(x => x !== 0).length;
}