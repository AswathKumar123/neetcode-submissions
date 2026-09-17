class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let maxArr = nums[0];

        for(let i=1; i< nums.length; i++){
            if(nums[i] > maxArr){
                maxArr = nums[i];
            }
        }

        let count = new Array(maxArr+1).fill(0);

        for(let i =0; i< nums.length; i++){
            count[nums[i]]++;
        }

        for(let i = 1; i< count.length; i++){
            count[i] = count[i-1] + count[i];
        }


        let res = new Array(nums.length)
        for(let i= nums.length-1; i>=0; i--){
            let position = count[nums[i]];
            res[position-1] = nums[i];
            count[nums[i]]--;
        }

        for(let i=0; i<nums.length; i++){
            nums[i] = res[i];
        }

        return nums;
    }
}
