function solution(w, h) {
    const max = (a, b) => {
        if(b === 0) return a;
        return max(b, a % b);
    }
    
    const num = max(w, h);
    const ww = w / num;
    const hh = h / num;

    const little = ww * hh - ((ww - 1) * (hh - 1));
    
    return w * h - (little * num); 
}