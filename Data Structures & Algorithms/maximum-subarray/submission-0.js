class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
    let maxSoFar = nums[0];

    let curSum = nums[0];

    for(let i=1; i< nums.length; i++){
        if(curSum < 0) { curSum = 0;}

        curSum += nums[i];

        maxSoFar = Math.max(curSum, maxSoFar);
    }

    return maxSoFar;

    }
}
