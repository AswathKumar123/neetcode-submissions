class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
   
       let maxVal = 0;
       let currentStreak =0;

       for(let num of nums){
        if(num === 1){
            currentStreak++;
        
        } else {
              currentStreak =0;
        }


        maxVal = Math.max(currentStreak, maxVal);
       }
        return maxVal;
    }
   
}
