function solution(my_string) {
    const set = new Set([...my_string]);
    return [...set].join('');
}

/*
아래 한줄로 변경할 수 있다.

function solution(my_string) {
    return [...new Set(my_string)].join('');
}
*/