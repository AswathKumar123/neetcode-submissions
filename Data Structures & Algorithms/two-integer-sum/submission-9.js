class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    
    let map ={};

    for(let i=0; i< nums.length; i++){
      let key = target - nums[i];

       if(key in map){
      return [map[key], i];
    }

    map[nums[i]] = i;
    }
       return [];
         }
 
}
