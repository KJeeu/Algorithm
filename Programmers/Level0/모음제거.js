function solution(my_string) {
    const vowel = "aeiou"
    return my_string.split('').filter(x => !vowel.includes(x)).join('');
}

/*
정규표현식으로 쓴 한줄 풀이도 있었다.
정규표현식은 어렵다고 넘겼는데 이것도 추후에 공부해야겠다ㅠ

function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}
*/