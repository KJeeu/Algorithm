function solution(name) {
    const alpha = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    
    let answer = 0;
    let nameArray = [...name];
    let move = name.length - 1;
  
    nameArray.forEach((it, idx) => {
        const order = alpha.indexOf(it); // 해당 알파벳 위치
        let target = 0;
  
        // A에서 특정 문자로 가는 최소 거리
        if (order === 0) {
            target = 0;
        } else {
            const next = order;
            const right = order;
            const left = 26 - order;
            const min = Math.min(next, right, left);
            target = min;
        }
  
        answer += target;
  
        let cursor = idx + 1;
        // 연속된 A 구간
        while (cursor < name.length && nameArray[cursor] === 'A') {
            cursor++;
        }
  
        // 커서 방향
        move = Math.min(
            move, // 정방향 직진
            (idx * 2) + (name.length - cursor), // 뒤로 돌기
            idx + 2 * (name.length - cursor) // 뒤의 요소 먼저
        );
    });
  
    return answer + move;
}