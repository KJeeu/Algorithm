function solution(nums) {
    let count = 0;
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                sum = nums[i] + nums[j] + nums[k];
                
                let x = 0;
                for(let a = 2; a <= Math.sqrt(sum); a++){
                    if(sum % a === 0) x++;
                } 
                if(x === 0) count++;
            }
        }
    }
    
    return count;
}