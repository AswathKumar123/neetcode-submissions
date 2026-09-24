class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let start = 0;
        let end = nums.length -1;

        while(start <=end){
            let mid = Math.floor((start+end)/2);

            if(nums[mid] === target){
                return mid;
            }

            if(target > nums[mid]){
                start = mid +1;
            } else
                end = mid -1;
            } 
                 return start;
        }

  

     
}
