function solution(book_time) {
    //분으로 변환
    const book = book_time.map(([start, end]) => {
        const [sh, sm] = start.split(':').map(x => Number(x));
        const [eh, em] = end.split(':').map(x => Number(x));
        
        const startTime = sh * 60 + sm;
        const endTime = eh * 60 + em + 10;
        
        return [startTime, endTime];
    })
    
    //입실 시간순대로 정렬
    book.sort((a, b) => a[0] - b[0]);
    
    let room = 0;
    const endTime = [];
    
    book.forEach(([start, end]) => {
        endTime.push(end);
        let count = false;
        
        endTime.forEach((time, index) => {
            if(time <= start) {
                count = index;
            }
        })
        
        if(count === false) {
            room++;
        } else {
            endTime.splice(count, 1);
        }
        
    })
    
    return room;
}