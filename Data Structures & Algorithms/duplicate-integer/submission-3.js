class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
  return new Set(nums).size !== nums.length;


//brute force
//   for(let i=0; i< nums.length; i++){
//     for(let j= i + 1; j < nums.length; j++){
//         if(nums[i] === nums[j]){
//             return true;
//         } 
//     }
//   }
//      return false;
//     }
}
}
