class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {

       let maxPrd = nums[0];

       let currMax = nums[0];

       let currMin = nums[0];

       for(let i=1; i< nums.length; i++){
        let tmp = nums[i];

        let prevMax = currMax;

        let preMin = currMin;


        currMax = Math.max(tmp, prevMax * tmp, preMin * tmp);

        currMin = Math.min(tmp, prevMax * tmp, preMin * tmp);

        maxPrd = Math.max(currMax, maxPrd)
       }

       return maxPrd;
    }
}
