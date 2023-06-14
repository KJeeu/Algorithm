const createLine = (wires) => {
  const line = {};

  wires.forEach(([from, to]) => {
    if (line.hasOwnProperty(from)) {
      line[from].push(to);
    } else {
      line[from] = [to];
    }

    if (line.hasOwnProperty(to)) {
      line[to].push(from);
    } else {
      line[to] = [from];
    }
  });

  return line;
}

const towerCount = (source, target, line, n) => {
  const visited = [];
  const queue = [source];
  visited[source] = true;
  let count = 1;

  while(true) {
    if (queue.length === 0) {
      return count;
    }

    const current = queue.shift();
    line[current]
      .filter((it) => it !== target)
      .filter((it) => !visited[it])
      .forEach((it) =>{
        queue.push(it);
        count++;
        visited[it] = true;
      });
  }
};

function solution(n, wires) {
  const line = createLine(wires);

  let answer = [];

  Array.from({ length: n }, (_, index) => index + 1)
    .forEach((tower) => {
      line[tower].forEach((it) => {
        const count = towerCount(tower, it, line, n);
        answer.push(Math.abs((n - count) - count));
      });
    });

  return Math.min(...answer);
}