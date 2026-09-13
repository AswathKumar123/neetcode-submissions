class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let start =0;
        let total =0;
        let minLen = Infinity;

        for(let end =0; end < nums.length; end++){
            total += nums[end];

            while(total >=target){
                minLen = Math.min(end - start +1, minLen);
                total -= nums[start];
                start++;
            }
        }

        return minLen === Infinity ? 0 : minLen;
    }
}
