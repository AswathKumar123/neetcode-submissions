class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        for(let i=0; i< nums.length; i++){
            let swapped = false;
            for(let j = 0; j < nums.length - i -1; j++){
                if(nums[j] > nums[j+1]){
                    let tmp = nums[j];
                    nums[j] = nums[j+1];
                    nums[j+1] = tmp;
                    swapped = true;
                }
            }
            if(!swapped) break;
        }
        return nums;
    }
}
