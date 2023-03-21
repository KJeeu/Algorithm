function solution(nums) {
    let set = [...new Set(nums)].length;
    let num = nums.length / 2;
    return set <= num ? set : num;
}