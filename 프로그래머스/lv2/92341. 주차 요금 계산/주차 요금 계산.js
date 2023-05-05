function solution(fees, records) {
    let cars = [];
    let list = [];
    let time = [];
    let money = [];
    
    for (let i of records) {
        let [num, car, io] = i.split(' ');
        let [h, m] = num.split(':').map(Number);
        let target = cars.indexOf(car);
        
        //IN - 처음 들어오는 차량
        if(io === 'IN' && target === -1) {
            cars.push(car);
            list.push(1);
            time.push(h * 60 + m);
        }
        //IN - 이미 왔던 차량
        else if(io === 'IN' && target !== -1) {
            list[target] += 1;
            time[target] += h * 60 + m;
        }
        //OUT
        if(io === 'OUT'){
            list[target] -= 1;
            time[target] -= h * 60 + m;
        }
    }
    
    for (let i = 0; i < cars.length; i++){
        // 출차 내력 없다면 23:59
        if(list[i] !== 0) time[i] -= 23 * 60 + 59;
        
        let t = Math.abs(time[i]);
        
        //요금 정산
        if(t <= fees[0]) money.push(fees[1]);
        else{
            let m = Math.ceil((t - fees[0]) / fees[2]); //단위 시간(분)
            money.push(fees[1] + (m * fees[3]));
        }
    }
    // 차량번호가 작은 자동차부터 청구할 주차 요금 배열에 담음
    let cars2 = cars.slice();
    cars2.sort((a, b) => a - b);
    
    let result = [];
    
    for(let j of cars2){
        result.push(money[cars.indexOf(j)]);
    }
    
    return result;
}