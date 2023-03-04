function solution(emergency) {
    let copy = [...emergency].sort((a, b) => b - a)
    return emergency.map(x => copy.indexOf(x) + 1)
}

/*
나랑 비슷한 코드지만 매개변수 복사시 slice()를 사용하였다.

function solution(emergency) {
    let sorted = emergency.slice().sort((a,b)=>b-a);
    return emergency.map(v=>sorted.indexOf(v)+1);
}
*/