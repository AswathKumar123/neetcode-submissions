class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {

        const removeDup = Array.from(new Set(nums)).sort((a,b) => a-b);

        for(let i =0; i < removeDup.length; i++){
            nums[i] = removeDup[i];
        }

        return removeDup.length;
    }
}
