function solution(files) {
    const filesList = [];
    
    //HEAD, NUMBER, TAIL 분류
    files.forEach(file => {
        const hnt = ['', '', ''];
        
        [...file].forEach(text => {
            const isNum = !isNaN(parseInt(text));
            
            //HEAD
            if (!isNum && !hnt[1].length) hnt[0] += text;

            //NUMBER
            else if(isNum && !hnt[2].length) hnt[1] += text;
            
            //TAIL
            else hnt[2] += text;
        })
        filesList.push(hnt);
    });
    
    //정렬
    filesList.sort((a, b) => {
        const strA = a[0].toUpperCase(), strB = b[0].toUpperCase();
        
        //HEAD 정렬
        if (strA > strB) return 1;
        else if (strA < strB) return -1;
        
        //Number 정렬
        else {
            const numA = parseInt(a[1]), numB = Number(b[1]);
            return numA - numB;
        }
    })
    
    return filesList.map(x => x.join(''));
}