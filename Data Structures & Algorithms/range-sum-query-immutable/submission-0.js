class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
     this.prefixSum = [];
     let cur =0;
     for(let num of nums){
        this.prefixSum.push(cur += num);
     }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const leftSum = left > 0 ? this.prefixSum[left -1] : 0;
        const rightSum = this.prefixSum[right];

        return rightSum - leftSum; 
       
       
}
}
