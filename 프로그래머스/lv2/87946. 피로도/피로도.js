function solution(k, dungeons) {
  let maxCount = 0;

  function explore(start, count, energy, visited) {
    // 모든 던전 방문 완료
    if (start === dungeons.length) {
      maxCount = Math.max(maxCount, count);
      return;
    }

    for (let i = 0; i < dungeons.length; i++) {
      if (visited[i]) continue; // 이미 방문한 던전이면 건너뜀
      if (dungeons[i][0] <= energy) {
        // 던전을 방문할 수 있으면
        visited[i] = true; // 해당 던전을 방문했다고 표시
        explore(start + 1, count + 1, energy - dungeons[i][1], visited); // 다음 던전으로 이동
        visited[i] = false; // 해당 던전 방문 취소
      }
    }

    // 현재 던전을 방문하지 않음
    explore(start + 1, count, energy, visited);
  }

  explore(0, 0, k, new Array(dungeons.length).fill(false)); // 모든 던전을 방문하지 않은 상태로 시작
  return maxCount;
}
