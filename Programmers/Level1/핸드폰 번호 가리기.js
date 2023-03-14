function solution(phone_number) {
    return "*".repeat(phone_number.length - 4) + phone_number.slice(phone_number.length-4, phone_number.length);
}

/*
 phone_number.slice(phone_number.length-4, phone_number.length);
 이렇게 굳이 안해도 되고
 phone_number.slice(-4);
 로 작성 가능
*/