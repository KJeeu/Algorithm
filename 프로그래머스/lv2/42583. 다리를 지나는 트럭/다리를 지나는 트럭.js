function solution(bridge_length, weight, truck_weights) {
    let legs = []; // 다리를 건너는 트럭
    let time = []; // 각 트럭의 시간
    let total = 0; // 경과 시간

    while (true) {
        if (legs.length === 0 && truck_weights.length === 0) break;

        if (time[0] === bridge_length) {
            legs.shift();
            time.shift();
        }

        if (legs.reduce((a, b) => a + b, 0) + truck_weights[0] <= weight) {
            legs.push(truck_weights.shift());
            time.push(0);
        }

        time = time.map((t) => t + 1);
        total++;
    }

    return total;
}