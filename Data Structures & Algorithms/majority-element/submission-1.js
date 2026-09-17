class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        let mc = nums[0];
        let count =1;

        for(let i=1; i< nums.length; i++){
            if(nums[i] == mc){
                count++;
            } else {
                count--;
                if(count ==0){
                    mc = nums[i];
                    count =1;
                }
            }
        }

        return mc;
    }
}
