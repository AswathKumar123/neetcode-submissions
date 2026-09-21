class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res =0;

        let set = new Set(nums);

        for(let val of nums){
            if(!set.has(val -1)){
             let curr = val;
             let streak =1;

             while(set.has(curr +1)){
                streak++;
                curr++;
             }
                      res = Math.max(res, streak);
            }

        }
            return res;

    }
}
