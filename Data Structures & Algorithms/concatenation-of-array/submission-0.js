class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [];

         ans.push(nums.concat(nums));

         return ans;
    }
}
