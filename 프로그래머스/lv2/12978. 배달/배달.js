function solution(N, road, K) {
  const graph = new Array(N + 1).fill().map(() => new Array(N + 1).fill(Infinity));

  road.forEach(([from, to, num]) => {
    if (num < graph[from][to]) {
      graph[from][to] = num;
      graph[to][from] = num;
    }
  });
    
  for (let i = 1; i <= N; i++) {
    graph[i][i] = 0;
  }

  // k : 중간 , i = 출발, j = 도착
  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        if (graph[i][k] + graph[k][j] < graph[i][j]) {
          graph[i][j] = graph[i][k] + graph[k][j];
        }
      }
    }
  }

  return graph[1].filter((it) => it <= K).length;
}
