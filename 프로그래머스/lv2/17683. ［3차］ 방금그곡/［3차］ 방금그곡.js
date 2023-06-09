function solution(m, musicinfos) {
    const title = [];
    const titleTime = [];
    
    musicinfos.forEach((x) => {
        let [start, end, music, sheet] = x.split(',');
        
        //시간
        start = start.split(':');
        end = end.split(':');
        
        let hour = end[0] - start[0];
        let min = end[1] - start[1];
        if(min < 0) {
            hour--;
            min += 60;
        }
        
        const time = hour * 60 + min;
        
        //악보
        let sm = [];
        [...sheet].forEach((it)=> {
            if(it === '#'){
                let target = sm.pop() + it;
                sm.push(target);
            } else sm.push(it);
        });
        
        //전체악보
        if(sm.length < time) {
            let t = time - sm.length;
            let smsm = [];
            
            while(t > 0){
                for(let i = 0; i < sm.length; i++){
                    smsm.push(sm[i]);
                    t--;
                }
            }
            sm.push(smsm);
        } else {
            //음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생된다.
            sm = sm.slice(0, time + 1);   
        }
        sm = sm.flat().join('');
        
        //네오가 기억하는 멜로디가 배열에 포함
        if(sm.split(m+'#').join('').includes(m)) {
            title.push(music);
            titleTime.push(time);
        }
    });
    
    if(title.length) {
        if(title.length === 1) {
            return title[0];
        } else {
            let max = Math.max(...titleTime);
            return title[titleTime.indexOf(max)];
        }
    } else return '(None)'; 
}