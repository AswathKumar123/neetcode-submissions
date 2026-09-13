class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    
   
      let map = {};
      let complement = 0;

      for(let i=0; i <nums.length; i++){
        complement = target - nums[i];

        if(map[complement] !== undefined){
        return [map[complement], i];
      }

      map[nums[i]] = i;
      }


    }
}
