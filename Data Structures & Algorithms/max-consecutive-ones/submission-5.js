class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
     
     let count =0;
     let maxVal = 0;

     for(let val of nums){
        if(val === 1){
            count++;
        } else {
            count =0;
        }

        maxVal = Math.max(maxVal, count);
     }
     return maxVal;
}
}
