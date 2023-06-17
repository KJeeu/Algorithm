function solution(sequence, k) {
    let [l, r] = [0, 0]
    let summed = sequence[l]
    const candidate = []
    while (r < sequence.length) {
        if (summed < k) summed += sequence[++r]
        else if (summed > k) summed -= sequence[l++]
        else {
            candidate.push([l, r])
            summed += sequence[++r]
            summed -= sequence[l++]
        }
    }
    // 후보 중 가장 차가 적은 것을 리턴
    return candidate.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]))[0] 
}