function solution(citations) {
    for(let i = Math.max(...citations); i >= 0; i--){
        let num = citations.filter(x => (x - i >= 0)).length; 
        if( num >= i && (citations.length - num) <= i ) return i;     
    }
}