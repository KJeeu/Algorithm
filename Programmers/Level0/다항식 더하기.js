function solution(polynomial) {
    let xcount = [];
    let num = 0;
    let x = 0;
    
    let p = polynomial.split(' + ');
    
    for(let i = 0; i < p.length; i++){
        if(p[i].includes("x")) xcount.push(p[i].slice(0, -1));
        else num += Number(p[i]);
    }
    
    for(let i = 0; i < xcount.length; i++){
        if(xcount[i] !== "") x += Number(xcount[i]);
        else x += 1;
    }
    
    if(x === 0){
        return num.toString(); 
    } else if(x === 1){
        if(num === 0) return "x";
        else return "x" + " + " + num
    } else if(num === 0){
        return x+"x";
    }else return x + "x" + " + " + num;
}