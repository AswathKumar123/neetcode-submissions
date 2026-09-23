class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        let de = [];
        let res = [];
        let n = nums.length;

        de.push(0);

        for(let i = 0; i< k; i++){
            while(de.length > 0 && nums[de[de.length-1]] < nums[i]){
                de.pop();
            }

            de.push(i);
        }

        res.push(nums[de[0]]);

        for(let j = k; j<n; j++){
            while(de.length > 0 && de[0] < j-k+1){
                de.shift();
            }

            while(de.length > 0 && nums[de[de.length -1]] < nums[j]){
                de.pop();
            }

            de.push(j);

            res.push(nums[de[0]]);
        }

        return res;
    }
}
