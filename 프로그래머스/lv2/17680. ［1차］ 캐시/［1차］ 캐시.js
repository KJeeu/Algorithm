function solution(cacheSize, cities) {
    //캐시 히트: 원하는 데이터가 캐시에 있을 경우
    //캐시 미스: 원하는 데이터가 캐시에 없을 경우
    
    let cache = [];
    let time = 0;
    
    for (let i of cities){
        if (cache.length < cacheSize) {
            let xCopy = i.toUpperCase();
            let cacheCopy = cache.map(x => x.toUpperCase());
            
            let index = cacheCopy.indexOf(xCopy);
            
            if(index !== -1)time++;
            else time += 5;
            
            cache.push(i);
        }
        else {
            let xCopy = i.toUpperCase();
            let cacheCopy = cache.map(x => x.toUpperCase());
            
            let index = cacheCopy.indexOf(xCopy);
            
            if(index !== -1) cache.splice(index,1);
            
            if(cache.length < cacheSize) {
                time++;
                cache.push(i);
            }
            
            else {
                time += 5;
                cache.shift();
                cache.push(i)
            }
        }
    }
    return time;
}