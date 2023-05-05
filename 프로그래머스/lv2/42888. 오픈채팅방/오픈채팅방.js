function solution(record) {
  const enter = '님이 들어왔습니다.';
  const leave = '님이 나갔습니다.';
  const userMap = new Map();
  const states = [];
  const result = [];

  for (const i of record) {
    const [state, user, nickname] = i.split(' ');

    if (state === 'Enter') { //입장
      userMap.set(user, nickname);
      states.push([user, 1]);
    } else if (state === 'Leave') { //퇴장
      states.push([user, 2]);
    } else { //닉네임 변경
      userMap.set(user, nickname);
    }
  }

  states.map((s) => {
    const nickname = userMap.get(s[0]);
    const msg = s[1] === 1 ? enter : leave;
    result.push(`${nickname}${msg}`);
  });

  return result;
}