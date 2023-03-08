function solution(id_pw, db) {
    let idpw = []
    
    for(let i = 0; i < db.length; i++){
        if(id_pw[0] !== db[i][0]) {idpw.push("fail")}
        else if(id_pw[1] !== db[i][1]){idpw.push("wrong pw")}
        else idpw.push("login")
    }
    
    return idpw.includes("login") ? "login" : idpw.includes("wrong pw") ? "wrong pw" : "fail"
}

/*
다른 풀이
map메서드는 항상 x.map(x => x*2) 이런 형태로만 써봤는데 위의 코드를 보고 Map에 대해 새롭게 알게 되었다.
2차원배열때 유용하게 쓸 수 있을 거 같다.

function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}
*/