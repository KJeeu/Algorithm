function solution(arr1, arr2) {
    let answer = [];
    let a = [];
    
    for(let i = 0; i < arr1.length; i++){    
       for(let j = 0; j < arr1[i].length; j++){
            a.push(arr1[i][j] + arr2[i][j]);
       } answer.push(a);
        a = [];
    }
    return answer;
}

/*
비효율적으로 풀었나 싶어서 아래 풀이랑 비교했는데
시간이나 메모리측에서 크게 차이는 안 났으나
아래가 좀 더 코드가 간결하고 시간, 메모리 측에서도 더 나은 코드였다.

function solution(A,B){
    return A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2]));
}
*/