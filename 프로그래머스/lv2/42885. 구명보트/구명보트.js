function solution(people, limit) {
    people = people.sort((a, b) => a - b);
    let count = 0;
    
    let f = 0;
    let l = people.length - 1;
    
    while (f < l) {
        let boat = people[l];
        if(boat + people[f] <= limit) {
            count++;
            f++;
            l--;
        } else {
            count++;
            l--;
        }
    }
    if(f === l)count++;
    return count;
}